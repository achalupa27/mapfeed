import { useEffect, useState } from 'react';
import { feature, mesh } from 'topojson';

import topology from '../data/countries-50m.json';

export const useMapData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const { countries } = topology.objects;
        setData({
            countries: feature(topology as any, countries as any),
            interiors: mesh(topology as any, countries as any, (a, b) => a !== b),
        } as any);
    }, []);

    return data;
};
