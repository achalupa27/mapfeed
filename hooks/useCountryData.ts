import { useEffect, useState } from 'react';

import Name from '../data/country-by-name.json';
import Capital from '../data/country-by-capital-city.json';
import Abbreviation from '../data/country-by-abbreviation.json';
import AvgMaleHeight from '../data/country-by-avg-male-height.json';
import Continent from '../data/country-by-continent.json';
import CurrencyCode from '../data/country-by-currency-code.json';
import CurrencyName from '../data/country-by-currency-name.json';
import Domain from '../data/country-by-domain-tld.json';
import Elevation from '../data/country-by-elevation.json';
import GovType from '../data/country-by-government-type.json';
import IndepDate from '../data/country-by-independence-date.json';
import Landlocked from '../data/country-by-landlocked.json';
import Languages from '../data/country-by-languages.json';
import LifeExpectancy from '../data/country-by-life-expectancy.json';
import NationalDish from '../data/country-by-national-dish.json';
import PopulationDensity from '../data/country-by-population-density.json';
import Population from '../data/country-by-population.json';
import Region from '../data/country-by-region-in-world.json';
import Religion from '../data/country-by-religion.json';
import SurfaceArea from '../data/country-by-surface-area.json';
import YearlyAvgTemp from '../data/country-by-yearly-average-temperature.json';

export const useCountryData = () => {
    console.log('useCountryData being called');

    // Initialize the map with Keys.
    const countryData = new Map<string, any>();
    Name.forEach((name) => {
        countryData.set(name.country, {});
    });

    function getStatValue(dataset: any) {
        if (dataset === Capital) return 'city';
        if (dataset === Abbreviation) return 'abbreviation';
        if (dataset === AvgMaleHeight) return 'height';
        if (dataset === Continent) return 'continent';
        if (dataset === CurrencyCode) return 'currency_code';
        if (dataset === CurrencyName) return 'currency_name';
        if (dataset === Domain) return 'tld';
        if (dataset === Elevation) return 'elevation';
        if (dataset === GovType) return 'government';
        if (dataset === IndepDate) return 'independence';
        if (dataset === Landlocked) return 'landlocked';
        if (dataset === Languages) return 'languages';
        if (dataset === LifeExpectancy) return 'expectancy';
        if (dataset === NationalDish) return 'dish';
        if (dataset === PopulationDensity) return 'density';
        if (dataset === Population) return 'population';
        if (dataset === Region) return 'location';
        if (dataset === Religion) return 'religion';
        if (dataset === SurfaceArea) return 'area';
        if (dataset === YearlyAvgTemp) return 'temperature';
        else return 'city';
    }

    function updateMap(mapKey: any, statName: string, dataset: any) {
        for (let i = 0; i < dataset.length; i++) {
            if (mapKey === dataset[i].country) {
                let newValue = countryData.get(mapKey);
                newValue[statName] = dataset[i][getStatValue(dataset)];
                countryData.set(mapKey, newValue);
            }
        }
    }

    const datasetStats = ['Capital', 'Abbreviation', 'Average Male Height', 'Continent', 'Currency Code', 'Currency Name', 'Domain', 'Elevation', 'Government Type', 'Independence Date', 'Landlocked', 'Languages', 'LifeExpectancy', 'NationalDish', 'PopulationDensity', 'Population', 'Region', 'Religion', 'Surface Area', 'Yearly Average Temperature'];
    const datasetArray = [Capital, Abbreviation, AvgMaleHeight, Continent, CurrencyCode, CurrencyName, Domain, Elevation, GovType, IndepDate, Landlocked, Languages, LifeExpectancy, NationalDish, PopulationDensity, Population, Region, Religion, SurfaceArea, YearlyAvgTemp];

    for (let [key, value] of countryData) {
        for (let i = 0; i < datasetArray.length; i++) {
            updateMap(key, datasetStats[i], datasetArray[i]);
        }
    }

    return countryData;
};
