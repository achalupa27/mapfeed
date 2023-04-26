interface SymbolData {
    s: string;
    d: string;
}

interface MarketOverviewTab {
    [key: string]: {
        title?: string;
        symbols: SymbolData[];
        originalTitle?: string;
    }[];
}

const MarketData: MarketOverviewTab = {
    'United States': [
        {
            title: 'Indices',
            symbols: [
                {
                    s: 'FOREXCOM:SPXUSD',
                    d: 'S&P 500',
                },
                {
                    s: 'FOREXCOM:NSXUSD',
                    d: 'Nasdaq 100',
                },
                {
                    s: 'FOREXCOM:DJI',
                    d: 'Dow 30',
                },
            ],
            originalTitle: 'Indices',
        },
    ],
    Argentina: [
        {
            symbols: [
                {
                    s: 'INDEX:IAR',
                    d: 'S&P Merval Argentina Index',
                },
            ],
        },
    ],
    Australia: [
        {
            symbols: [
                {
                    s: 'ASX:ASX',
                    d: 'S&P/ASX 299 Index',
                },
            ],
        },
    ],
    Belgium: [
        {
            symbols: [
                {
                    s: 'INDEX:BEL20',
                    d: 'BEL 20 Index',
                },
            ],
        },
    ],
    Brazil: [
        {
            symbols: [
                {
                    s: 'INDEX:ibov',
                    d: 'IBovespa Index',
                },
            ],
        },
    ],
    Canada: [
        {
            symbols: [
                {
                    s: 'TSX:TSX',
                    d: 'S&P/TSX Composite Index',
                },
            ],
        },
    ],
    Chile: [
        {
            symbols: [
                {
                    s: 'BCS:SP_IPSA',
                    d: 'S&P IPSA',
                },
            ],
        },
    ],
    China: [
        {
            symbols: [
                {
                    s: 'SZSE:399106',
                    d: 'SZSE Composite Index',
                },
                {
                    s: 'HSI:HSI',
                    d: 'Hang Seng Index',
                },
            ],
        },
    ],
    Colombia: [
        {
            symbols: [
                {
                    s: 'BVC:ICAP',
                    d: 'Indice de Capitalizacion Bursatil ',
                },
            ],
        },
    ],
    Egypt: [
        {
            symbols: [
                {
                    s: 'EGX:EGX30',
                    d: 'EGX 30 Price Return Index',
                },
            ],
        },
    ],
    Finland: [
        {
            symbols: [
                {
                    s: 'OMXHEX:OMXH25',
                    d: 'OMX Helsinki 25 Index',
                },
            ],
        },
    ],
    France: [
        {
            symbols: [
                {
                    s: 'INDEX:CAC40',
                    d: 'CAC 40 Index',
                },
            ],
        },
    ],
    Germany: [
        {
            symbols: [
                {
                    s: 'XETR:DAX',
                    d: 'DAX Index',
                },
            ],
        },
    ],
    'Hong Kong': [
        {
            symbols: [
                {
                    s: 'HSI:HSI',
                    d: 'Hang Seng Index',
                },
            ],
        },
    ],
    India: [
        {
            symbols: [
                {
                    s: 'NSE:NIFTY',
                    d: 'Nifty 50 Index',
                },
                {
                    s: 'BSE:SENSEX',
                    d: 'S&P BSE Sensex Index',
                },
            ],
        },
    ],
    Indonesia: [
        {
            symbols: [
                {
                    s: 'IDX:IDX30',
                    d: 'IDX 30',
                },
            ],
        },
    ],
    Israel: [
        {
            symbols: [
                {
                    s: 'TASE:TA35',
                    d: 'TA-35 Index',
                },
                {
                    s: 'TASE:TA125',
                    d: 'TA-125 Index',
                },
            ],
        },
    ],
    Italy: [
        {
            symbols: [
                {
                    s: 'INDEX:FTSEMIB',
                    d: 'FTSE MIB Index',
                },
            ],
        },
    ],
    Japan: [
        {
            symbols: [
                {
                    s: 'SPREADEX:NIKKEI',
                    d: 'Nikkei 225 Index',
                },
            ],
        },
    ],
    Malaysia: [
        {
            symbols: [
                {
                    s: 'NASDAQ:NQMY',
                    d: 'The NASDAQ Maylasia Indexed Market',
                },
            ],
        },
    ],
    Mexico: [
        {
            symbols: [
                {
                    s: 'INDEX:ME',
                    d: 'IPC Mexico Index',
                },
            ],
        },
    ],
    Denmark: [
        {
            symbols: [
                {
                    s: 'EURONEXT:AEX',
                    d: 'AEX Index',
                },
            ],
        },
    ],
    Nigeria: [
        {
            symbols: [
                {
                    s: 'NSENG:NGX30',
                    d: 'NGX 30 Index',
                },
            ],
        },
    ],
    Peru: [
        {
            symbols: [
                {
                    s: 'BVL:SPBLPGPT',
                    d: 'S&P / BVL Peru General Index (PEN)',
                },
            ],
        },
    ],
    Philippines: [
        {
            symbols: [
                {
                    s: 'NASDAQ:NQPH',
                    d: 'The NASDAQ Philippines Indexed',
                },
            ],
        },
    ],
    Poland: [
        {
            symbols: [
                {
                    s: 'GPW:WIG20',
                    d: 'WIG20 Index',
                },
            ],
        },
    ],
    Portugal: [
        {
            symbols: [
                {
                    s: 'EURONEXT:BVL',
                    d: 'PSI ALL-SHARE INDEX',
                },
            ],
        },
    ],
    Russia: [
        {
            symbols: [
                {
                    s: 'MOEX:MOEX',
                    d: 'MOEX Russia Index',
                },
            ],
        },
    ],
    'Saudi Arabia': [
        {
            symbols: [
                {
                    s: 'TADAWUL:2222',
                    d: 'Saudi Arabian Oil Co.',
                },
                {
                    s: 'TADAWUL:7010',
                    d: 'Saudi Telecom Co.',
                },
                {
                    s: 'TADAWUL:1211',
                    d: 'Saudi Arabian Mining Co.',
                },
                {
                    s: 'TADAWUL:2010',
                    d: 'Saudi Basic Industries Co.',
                },
            ],
        },
    ],
    Singapore: [
        {
            symbols: [
                {
                    s: 'TVC:STI',
                    d: 'Straits Times Index',
                },
            ],
        },
    ],
    'South Africa': [
        {
            symbols: [
                {
                    s: 'TVC:SA40',
                    d: 'South Africa Top 40 Index',
                },
            ],
        },
    ],
    'South Korea': [
        {
            symbols: [
                {
                    s: 'NASDAQ:NQKRT',
                    d: 'NASDAQ Korea TR Index',
                },
            ],
        },
    ],
    Spain: [
        {
            symbols: [
                {
                    s: 'BME:IBC',
                    d: 'IBEX 35 Index',
                },
            ],
        },
    ],
    Sweden: [
        {
            symbols: [
                {
                    s: 'OMXSTO:OMXS30',
                    d: 'OMX Stockholm 30 Index',
                },
            ],
        },
    ],
    Switzerland: [
        {
            symbols: [
                {
                    s: 'SIX:SMI',
                    d: 'Swiss Market Index',
                },
            ],
        },
    ],
    Taiwan: [
        {
            symbols: [
                {
                    s: 'TPEX:GTSM50',
                    d: 'Gretai 50 Index',
                },
                {
                    s: 'TWSE:TW50',
                    d: 'TWSE Taiwan 50 Index',
                },
            ],
        },
    ],
    Thailand: [
        {
            symbols: [
                {
                    s: 'SET:SET100',
                    d: 'SET100 Index',
                },
            ],
        },
    ],
    Turkey: [
        {
            symbols: [
                {
                    s: 'BIST:XU100',
                    d: 'BIST 100 Index',
                },
            ],
        },
    ],
    'United Arab Emirates': [
        {
            symbols: [
                {
                    s: 'ADX:FADX15',
                    d: 'FTSE ADX 15 Index',
                },
            ],
        },
    ],
    'United Kingdom': [
        {
            symbols: [
                {
                    s: 'CAPITALCOM:UK100',
                    d: 'FTSE UK 100 Index',
                },
            ],
        },
    ],
    Vietnam: [
        {
            symbols: [
                {
                    s: 'HOSE:VNINDEX',
                    d: 'Vietnam Index',
                },
            ],
        },
    ],
};

export default MarketData;
