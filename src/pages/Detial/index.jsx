import { useParams } from "react-router";
import styled from "styled-components";
import { useCountry } from "../../utils/hooks";

const Detial = () => {
  const countryName = useParams();
  const { countryData } = useCountry(countryName.country);

  console.log({ countryData });

  return (
    <StyledDetial>
      <div className="detial-img">
        <img src={countryData.flag} alt={countryData.name} />
      </div>
      <div className="detial-text">
        <h1>{countryData.name}</h1>
        <div className="descs">
          <div className="desc-block">
            <div className="desc">
              <h3>Population:</h3>
              <p>{countryData.population}</p>
            </div>

            <div className="desc">
              <h3>Region:</h3>
              <p>{countryData.region}</p>
            </div>

            <div className="desc">
              <h3>Capital:</h3>
              <p>{countryData.capital}</p>
            </div>
          </div>
          <div className="desc-block">
            <div className="desc">
              <h3>Sub Region:</h3>
              <p>{countryData.subregion}</p>
            </div>

            <div className="desc">
              <h3>Top Level Domain:</h3>
              <p>{countryData.topLevelDomain}</p>
            </div>

            <div className="desc">
              <h3>Currencies:</h3>
              {countryData.currencies &&
                countryData.currencies.map((currency, index) => {
                  return <p key={index}>{currency.name}</p>;
                })}
            </div>

            <div className="desc">
              <h3>Languages:</h3>
              {countryData.languages &&
                countryData.languages.map((language, index) => {
                  return <p key={index}>{language.name}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    </StyledDetial>
  );
};

const StyledDetial = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 1200px;
  margin: auto;

  .detial-text {
    .descs {
      display: flex;
    }

    .desc-block {
      .desc {
        display: flex;
      }
    }
  }
`;

export default Detial;
