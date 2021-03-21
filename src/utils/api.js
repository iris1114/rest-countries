import axios from "axios";

export const getCountries = async () =>{
    const countriesData = await axios.get(
       " https://restcountries.eu/rest/v2/all"
    );
    return countriesData.data;
}

export const getCountry = async (name) =>{
    const countryData = await axios.get(
       `https://restcountries.eu/rest/v2/name/${name}`
    );
    return countryData.data[0];
}