import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCountry } from "../../utils/hooks";
import { COLOR } from "../../utils/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../utils/themeContext";

const Detial = ({ countriesData }) => {
  const countryName = useParams();
  const { countryData } = useCountry(countryName.country);
  const history = useHistory();
  const { theme } = useContext(ThemeContext);

  const getCountryName = (border) => {
    for (const country of countriesData) {
      if (country.alpha3Code === border) {
        return country.name;
      }
    }
  };

  const handleBackClick = () => {
    history.push("/");
  };

  return (
    <StyledDetial theme={theme}>
      <div className="container">
        <div className="btn" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          <span>Back</span>
        </div>
        <div className="detials">
          <div className="detial-img">
            <div className="img-wrap">
              <img src={countryData.flag} alt={countryData.name} />
            </div>
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
                      <Link to={`/${getCountryName(border)}`} key={index}>
                        <p className="border">{getCountryName(border)}</p>
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
      </div>
    </StyledDetial>
  );
};

const StyledDetial = styled.main`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  min-height: 100vh;

  .container {
    max-width: 1200px;
    margin: auto;
    padding: 50px 20px;

    @media (min-width: 767px) and (max-width: 1024px) {
      padding: 50px 40px;
    }

    .btn {
      padding: 10px 20px;
      border: 1px solid ${COLOR.grey};
      border-radius: 5px;
      display: inline-block;
      margin-bottom: 50px;
      cursor: pointer;

      @media screen and (max-width: 767px) {
        margin-left: 15px;
      }

      .icon {
        margin-right: 5px;
      }

      &:hover {
        background-color: ${(props) => props.theme.color};
        color: ${(props) => props.theme.backgroundColor};
      }
    }

    .detials {
      display: flex;
      flex-wrap: wrap;
      justify-contents: center;

      .detial-img {
        width: 50%;

        @media screen and (max-width: 767px) {
          width: 100%;
        }

        .img-wrap {
          width: 70%;
          height: 280px;

          @media (min-width: 992px) and (max-width: 1024px) {
            width: 70%;
            height: 180px;
          }
          @media (min-width: 768px) and (max-width: 991px) {
            width: 80%;
            height: 150px;
          }

          @media screen and (max-width: 767px) {
            width: 100%;
            height: 200px;
            margin-bottom: 50px;
          }

          img {
            width: 100%;
            height: 100%;
            border: 1px solid ${COLOR.lightGrey};
            background-color: ${COLOR.lightGrey};
            object-fit: cover;
          }
        }
      }

      .detial-text {
        width: 50%;
        line-height: 24px;

        @media screen and (max-width: 767px) {
          width: 100%;
          padding: 0px 15px;
          margin-bottom: 30px;
        }

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
              color: ${(props) => props.theme.color};

              &:hover {
                background-color: ${(props) => props.theme.color};
                color: ${(props) => props.theme.backgroundColor};
              }
            }
          }
        }
      }
    }
  }
`;

export default Detial;
