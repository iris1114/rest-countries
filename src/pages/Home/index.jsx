import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../utils/themeContext";
import CardList from "./CardList";
import Filter from "./Filter";

const Home = ({ countriesData }) => {
  const [filtedCountries, setFiltedCountries] = useState(countriesData);
  const { theme } = useContext(ThemeContext);

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
    <StyledHome theme={theme}>
      <Filter
        onSearchChange={handleSearchChange}
        onSelectChange={handleSelectChange}
      />
      <CardList countries={filtedCountries} />
    </StyledHome>
  );
};

const StyledHome = styled.main`
  padding: 40px 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

export default Home;
