import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCountry } from "../../utils/hooks";
import { COLOR } from "../../utils/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Detial = ({ countriesData }) => {
  const countryName = useParams();
  const { countryData } = useCountry(countryName.country);
  const history = useHistory();

  const getCountryName = (border) => {
    for (const country of countriesData) {
      if (country.alpha3Code === border) {
        return country.name;
      }
    }
  };

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <StyledDetial>
      <div className="btn" onClick={handleBackClick}>
        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
        <span>Back</span>
      </div>
      <div className="detials">
        <div className="detial-img">
          <img src={countryData.flag} alt={countryData.name} />
        </div>
        <div className="detial-text">
          <h1 className="f-lg-2xl f-xl">{countryData.name}</h1>
          <div className="descs">
            <div className="desc-block">
              <div className="desc">
                <h3>Population: </h3>
                <p>{countryData.population}</p>
              </div>

              <div className="desc">
                <h3>Region: </h3>
                <p>{countryData.region}</p>
              </div>

              <div className="desc">
                <h3>Capital: </h3>
                <p>{countryData.capital}</p>
              </div>
            </div>
            <div className="desc-block">
              <div className="desc">
                <h3>Sub Region: </h3>
                <p>{countryData.subregion}</p>
              </div>

              <div className="desc">
                <h3>Top Level Domain: </h3>
                <p>{countryData.topLevelDomain}</p>
              </div>

              <div className="desc">
                <h3>Currencies: </h3>
                {countryData.currencies &&
                  countryData.currencies.map((currency, index) => {
                    return <p key={index}>{currency.name}</p>;
                  })}
              </div>

              <div className="desc">
                <h3>Languages: </h3>
                {countryData.languages &&
                  countryData.languages.map((language, index) => {
                    return <p key={index}>{language.name}</p>;
                  })}
              </div>
            </div>
          </div>

          <div className="borders-wrap">
            <h3>Border Countries:</h3>
            <div className="borders">
              {countryData.borders && countryData.borders.length > 0 ? (
                countryData.borders.map((border, index) => {
                  return (
                    <Link to={`/${getCountryName(border)}`}>
                      <p className="border" key={index}>
                        {getCountryName(border)}
                      </p>
                    </Link>
                  );
                })
              ) : (
                <p>None</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledDetial>
  );
};

const StyledDetial = styled.main`
  max-width: 1200px;
  margin: auto;
  padding-top: 50px;

  .btn {
    padding: 10px 20px;
    border: 1px solid ${COLOR.grey};
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 50px;
    cursor: pointer;

    .icon {
      margin-right: 5px;
    }
  }

  .detials {
    display: flex;
    flex-wrap: wrap;
    justify-contents: center;

    .detial-img {
      width: 50%;

      img {
        width: 70%;
        border: 1px solid ${COLOR.grey};
      }
    }

    .detial-text {
      width: 50%;
      line-height: 24px;

      h1 {
        margin-bottom: 20px;
      }

      h3 {
        margin-right: 10px;
      }

      .descs {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
      }

      .desc-block {
        margin-right: 20px;
        .desc {
          display: flex;
          flex-wrap: wrap;
        }
      }

      .borders-wrap {
        .borders {
          display: flex;
          flex-wrap: wrap;

          .border {
            padding: 5px 10px;
            border: 1px solid ${COLOR.grey};
            border-radius: 5px;
            margin-right: 10px;
            margin-top: 10px;

            &:hover {
              background-color: ${COLOR.black};
              color: ${COLOR.white};
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .detials {
      .detial-img,
      .detial-text {
        width: 100%;
        padding: 0px 15px;
        margin-bottom: 30px;

        img {
          width: 100%;
        }
      }
    }
  }
`;

export default Detial;
