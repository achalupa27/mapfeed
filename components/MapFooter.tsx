const MapFooter = ({ selectedCountry, data }: any) => {
    return (
        <div className='absolute bottom-0 z-10 m-2 flex h-auto w-[calc(100%-16px)] space-x-24 border bg-[#1a2b41]/90 px-4 py-2 text-white'>
            <div className='flex flex-col'>
                <div>Capital: {data.Capital}</div>
                <div>Government Type: {data['Government Type']}</div>
                <div>Independence Date: {data['Independence Date']}</div>
                <div>Population: {data.Population}</div>
                <div>Population Density: {data['PopulationDensity']}</div>
                <div>Continent: {data.Continent}</div>
                <div>
                    Currency: {data['Currency Name']} ({data['Currency Code']})
                </div>
                <div></div>
                <div></div>
            </div>
            <div className='flex flex-col'>
                <div>Surface Area: {data['Surface Area']}</div>
                <div>Elevation: {data.Elevation}ft</div>
                <div>Landlocked: {data.Landlocked === 1 ? 'Yes' : 'No'}</div>
                <div>Yearly Average Temperature: {data['Yearly Average Temperature']}C</div>
                <div>Average Male Height: {data['Average Male Height']}</div>
                <div>Domain: {data.Domain}</div>
                <div>Life Expectancy: {data['LifeExpectancy']}</div>
            </div>
            <div className='flex flex-col'>
                <div>Region: {data.Region}</div>
                <div>National Dish: {data['NationalDish']}</div>
                <div>Religion: {data.Religion}</div>
                <div>
                    Languages:{' '}
                    {data.Languages.map((language: string) => (
                        <span key={language}>{language}, </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

MapFooter.displayName = 'MapFooter';
export default MapFooter;
