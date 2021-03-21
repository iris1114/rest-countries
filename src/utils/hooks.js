import { useEffect, useState } from "react";
import { getCountries, getCountry } from "./api";


export const useCountries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCountries()
      .then((res) => {
        setCountriesData(res);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    countriesData,
    loading: isLoading,
    error,
  };
};

export const useCountry = (countryName) => {
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCountry(countryName)
      .then((res) => {
        setCountryData(res);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [countryName]);

  return {
    countryData,
    loading: isLoading,
    error,
  };
};


