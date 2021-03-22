import { useEffect, useState } from "react";
import CardList from "./CardList";
import Filter from "./Filter";

const Home = ({ countriesData }) => {
  const [filtedCountries, setFiltedCountries] = useState(countriesData);

  const handleSearchChange = (value) => {
    const filteredItems = countriesData.filter((country) => {
      return country.name.toLowerCase().includes(value.toLowerCase());
    });
    setFiltedCountries(filteredItems);
  };

  const handleSelectChange = (value) => {
    const filteredItems = countriesData.filter((country) => {
      return country.region.toLowerCase().includes(value.toLowerCase());
    });
    setFiltedCountries(filteredItems);
  };

  useEffect(() => {
    setFiltedCountries(countriesData);
  }, [countriesData]);

  return (
    <main>
      <Filter
        onSearchChange={handleSearchChange}
        onSelectChange={handleSelectChange}
      />
      <CardList countries={filtedCountries} />
    </main>
  );
};

export default Home;
