import { useCallback, useMemo, useState } from 'react';
import MapVector from '../components/MapVector';
import { useMapData } from '../hooks/useMapData';
import { useCountryData } from '../hooks/useCountryData';
import { google } from 'googleapis';
import LeftCard from '../components/LeftCard';

// async function getInitialData(spreadsheetId: string, range: string) {
//     const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
//     const sheets = google.sheets({ version: 'v4', auth });

//     const response = await sheets.spreadsheets.values.get({
//         spreadsheetId,
//         range,
//     });

//     return response.data.values;
// }

// async function pollSheetData(spreadsheetId: string, range: string, onData: any) {
//     const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
//     const sheets = google.sheets({ version: 'v4', auth });

//     const response = await sheets.spreadsheets.values.batchGet({
//         spreadsheetId,
//         ranges: [range],
//     });

//     let data = response?.data?.valueRanges?.[0].values;

//     // Call the onData callback with the initial data
//     onData(data);

//     const updateInterval = 5000;

//     const updateData = async () => {
//         const updatesResponse = await sheets.spreadsheets.values.batchGet({
//             spreadsheetId,
//             ranges: [range],
//         });

//         const updates = updatesResponse?.data?.valueRanges?.[0].values;

//         // Filter out any data that hasn't changed
//         const changedData = updates?.filter((update: any, i: number) => {
//             return update !== data?.[i];
//         });

//         if (changedData && changedData.length > 0) {
//             console.log('Data updated:', changedData);
//             onData(updates);
//         }

//         data = updates;
//     };

//     setInterval(updateData, updateInterval);
// }

const Map = ({ indexData }: any) => {
    console.log('initialIndexData: ', indexData);
    // const [indexData, setIndexData] = useState(initialIndexData);
    const [selectedCountry, setSelectedCountry] = useState('United States');
    const mapData = useMapData();
    const countryData = useCountryData();

    indexData = [
        ['United States', '-0.42'],
        ['Canada', '-0.36'],
        ['Argentina', '1.68'],
        ['Australia', '-0.07'],
        ['Belgium', '-0.79'],
        ['Brazil', '-0.88'],
        ['Chile', '-3.16'],
        ['China', '0.33'],
        ['Egypt', '-0.086'],
        ['Finland', '0.75'],
        ['France', '-0.86'],
        ['Germany', '-0.48'],
        ['India', '0.25'],
        ['Indonesia', '1.64'],
        ['Israel', '1.12'],
        ['Italy', '-0.54'],
        ['Japan', '-0.71'],
        ['Mexico', '-0.22'],
        ['Denmark', '-0.77'],
        ['Nigeria', '0.45'],
        ['Peru', '-0.85'],
        ['Poland', '-0.11'],
        ['Russian Federation', '0.1'],
        ['Singapore', '-0.93'],
        ['South Africa', '-1.28'],
        ['Spain', '0.01'],
        ['Sweden', '-0.41'],
        ['Taiwan', '-2.01'],
        ['Thailand', '#N/A'],
        ['Turkey', '-2.2'],
        ['United Arab Emirates', '0.36'],
        ['United Kingdom', '-0.49'],
    ];

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
        <div>
            <LeftCard selectedCountry={selectedCountry} data={memoizedCountryData.get(selectedCountry)} />
            <div className='absolute h-full w-full bg-[#1a2b41]'>
                <svg width='100%' height='100%'>
                    <MapVector data={memoizedMapData} indexData={indexData} onCountryClick={handleCountryClick} />
                </svg>
            </div>
        </div>
    );
};

export async function getServerSideProps(context: any) {
    const range = 'Symbols!A1:B32';
    // const initialData = await getInitialData(process.env.SHEET_ID as string, range);
    let initialData: any = [];
    return {
        props: {
            initialData,
        },
    };

    // return new Promise((resolve, reject) => {
    //     // Set up a callback to receive updates
    //     const onDataUpdate = (data: any) => {
    //         // Update the component with the new data
    //         // (you may want to use WebSockets or a similar technology to push the updates to the client instead)
    //     };

    //     // Poll for updates to the sheet
    //     pollSheetData(process.env.SHEET_ID as string, range, onDataUpdate);

    //     // Resolve the promise with the initial data
    //     resolve({
    //         props: {
    //             initialData,
    //         },
    //     });
    // });
}

export default Map;
