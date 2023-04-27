import { geoEquirectangular, geoPath, zoom, ZoomBehavior } from 'd3';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';

interface MapProps {
    data: {
        countries: any;
        interiors: any;
    };
    indexData: string[];
    onCountryClick: (name: string) => void;
}

const MapVector: React.FC<MapProps> = React.memo(({ data: { countries, interiors }, indexData, onCountryClick }) => {
    console.log('MapVector being called');
    const [zoomTransform, setZoomTransform] = useState({ k: 1, x: 0, y: 0 });
    const mapRef = useRef<SVGGElement>(null);
    const projection = useMemo(() => geoEquirectangular().fitSize([window.innerWidth, window.innerHeight], countries), [countries]);
    const path = useMemo(() => geoPath(projection), [projection]);
    let zoomBehavior: ZoomBehavior<Element, unknown> | null = null;

    useEffect(() => {
        zoomBehavior = zoom()
            .scaleExtent([0.75, 2])
            .translateExtent([
                [0, 0],
                [window.innerWidth, window.innerHeight],
            ]) // set the minimum and maximum translation extent
            .on('zoom', (event) => {
                setZoomTransform(event.transform);
            });
        if (mapRef.current && zoomBehavior) {
            d3.select(mapRef.current.ownerSVGElement).call(zoomBehavior as any);
        }
    }, []);

    useEffect(() => {
        if (mapRef.current && zoomBehavior) {
            d3.select(mapRef.current).call(zoomBehavior as any);
        }
    }, [mapRef.current]);

    const changeToColor = (value: string) => {
        let indexChange = parseFloat(value);

        if (indexChange < 0.5 && indexChange >= 0.1) return 'fill-green-100';
        else if (indexChange >= 0.5 && indexChange < 1.5) return 'fill-green-300';
        else if (indexChange >= 1.5 && indexChange < 2.5) return 'fill-green-500';
        else if (indexChange >= 2.5) return 'fill-green-700';
        else if (indexChange < 0.1 && indexChange > -0.1) return 'fill-white';
        else if (indexChange < -0.1 && indexChange > -0.5) return 'fill-red-100';
        else if (indexChange <= -0.5 && indexChange > -1.5) return 'fill-red-300';
        else if (indexChange <= -1.5 && indexChange > -2.5) return 'fill-red-500';
        else if (indexChange <= -2.5) return 'fill-red-700';
        else return 'fill-yellow-300';
    };

    function getCountryClass(countryName: string): string {
        const obj: { [countryName: string]: string } = indexData.reduce((acc, [key, value]) => ({ ...acc, [key]: changeToColor(value) }), {});
        return obj[countryName] || 'fill-secondary/20'; // Use a default class if the country is not found in the map
    }

    return (
        <g ref={mapRef} transform={`translate(${zoomTransform.x}, ${zoomTransform.y}) scale(${zoomTransform.k})`}>
            {countries.features.map((feature: any) => (
                <path
                    key={feature.geometry.coordinates[0]}
                    className={`${getCountryClass(feature.properties.name)} hover:opacity-70`}
                    d={path(feature) || ''}
                    onClick={() => {
                        onCountryClick(feature.properties.name);
                    }}
                />
            ))}
            <path className='fill-none stroke-primary' d={path(interiors) as any} />
        </g>
    );
});

MapVector.displayName = 'MapVector';
export default React.memo(MapVector, (prevProps, nextProps) => prevProps.data === nextProps.data);
