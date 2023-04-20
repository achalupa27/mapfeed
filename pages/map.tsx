import { memo, useCallback, useMemo, useState } from 'react';
import MapVector from '../components/MapVector';
import { useMapData } from '../hooks/useMapData';
import { useCountryData } from '../hooks/useCountryData';
import Footer from '../components/MapFooter';

const DEFAULT_COUNTRY = 'Canada';

const Map = () => {
    const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY);
    const mapData = useMapData();
    const countryData = useCountryData();

    const handleCountryClick = useCallback((name: string) => {
        setSelectedCountry(name);
    }, []);

    const memoizedMapData = useMemo(() => {
        return mapData;
    }, [mapData]);

    const memoizedCountryData = useMemo(() => {
        return countryData;
    }, [countryData]);

    if (!memoizedMapData) {
        return <div className='flex h-screen w-screen items-center justify-center bg-[#1a2b41] text-white'>Loading Map...</div>;
    }

    return (
        <div className='h-screen w-screen bg-[#1a2b41]'>
            <div className='absolute top-0 z-10 m-2 flex w-[calc(100%-16px)] items-center justify-center border bg-[#1a2b41]/90 text-white'>
                {selectedCountry} ({memoizedCountryData.get(selectedCountry)?.Abbreviation})
            </div>
            <div className='absolute flex h-[80%] w-full items-center justify-center bg-[#1a2b41]'>
                {' '}
                <svg width='100%' height='100%'>
                    <MapVector data={memoizedMapData} onCountryClick={handleCountryClick} />
                </svg>
            </div>
            <Footer selectedCountry={selectedCountry} data={memoizedCountryData.get(selectedCountry)} />
        </div>
    );
};

export default Map;
