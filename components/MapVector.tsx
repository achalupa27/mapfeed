import { geoEquirectangular, geoPath, zoom, ZoomBehavior } from 'd3';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';

interface MapProps {
    data: {
        countries: any;
        interiors: any;
    };
    onCountryClick: (name: string) => void;
}

const MapVector: React.FC<MapProps> = React.memo(({ data: { countries, interiors }, onCountryClick }) => {
    console.log('MapVector being called');

    const [zoomTransform, setZoomTransform] = useState({ k: 1, x: 0, y: 0 });
    const mapRef = useRef<SVGGElement>(null);
    const projection = useMemo(() => geoEquirectangular().fitSize([window.innerWidth, window.innerHeight], countries), [countries]);
    const path = useMemo(() => geoPath(projection), [projection]);
    let zoomBehavior: ZoomBehavior<Element, unknown> | null = null;

    useEffect(() => {
        zoomBehavior = zoom()
            .scaleExtent([1, 2]) // set the minimum and maximum scale factor
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

    return (
        <g ref={mapRef} transform={`translate(${zoomTransform.x}, ${zoomTransform.y}) scale(${zoomTransform.k})`}>
            {countries.features.map((feature: any) => (
                <path
                    key={feature.geometry.coordinates[0]}
                    className='fill-gray-200 hover:fill-white'
                    d={path(feature) || ''}
                    onClick={() => {
                        onCountryClick(feature.properties.name);
                    }}
                />
            ))}
            <path className='fill-none stroke-slate-800' d={path(interiors) as any} />
        </g>
    );
});

export default React.memo(MapVector, (prevProps, nextProps) => prevProps.data === nextProps.data);
