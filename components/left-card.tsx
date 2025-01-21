import { MarketOverview, EconomicCalendar } from 'react-ts-tradingview-widgets';
import MarketData from '../data/tabs';
import CurrencyCodes from '../data/country-by-currency-code.json';
import React, { useEffect } from 'react';
import * as htmlparser2 from 'htmlparser2';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import cheerio from 'cheerio';

const MarketOverviewNoSSR = dynamic(() => import('react-ts-tradingview-widgets').then((w) => w.MarketOverview), {
    ssr: false,
});

const LeftCard = ({ selectedCountry, data }: any) => {
    console.log(CurrencyCodes);
    const { setTheme } = useTheme();
    setTheme('light');

    // useEffect(() => {
    //     const fetchData = () => {
    //         const parser = new htmlparser2.Parser({
    //             ontext(text) {
    //                 console.log('-->', text);
    //             },
    //         });

    //         const spanElements = document.querySelectorAll('iframe');
    //         console.log('document: ', spanElements);

    //         spanElements.forEach((element) => {
    //             console.log('stuff i want:', element.textContent);
    //         });
    //     };

    //     fetchData();
    //     const interval = setInterval(fetchData, 5000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className='absolute left-0 top-0 z-10 flex h-screen w-[400px] flex-col bg-secondary/90 py-2 text-primary'>
            <div className='flex justify-center space-x-2'>
                <img className='h-6 w-8' src={data?.Flag} alt={selectedCountry} />
                <span>{selectedCountry}</span>
            </div>
            <div className='flex h-full flex-col justify-between'>
                <MarketOverviewNoSSR colorTheme='light' height={500} width={400} isTransparent showChart={false} tabs={MarketData[selectedCountry] as []} />
                <EconomicCalendar colorTheme='light' height={400} width={400} isTransparent currencyFilter={data?.['Currency Code']} />
            </div>
        </div>
    );
};

LeftCard.displayName = 'LeftCard';
export default dynamic(() => Promise.resolve(LeftCard), { ssr: false });
