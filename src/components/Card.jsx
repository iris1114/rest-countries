import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../utils/style";

const Card = ({ country }) => {
  return (
    <StledCard>
      <Link to={`/${country.name}`}>
        <div className="card-img">
          <img src={country.flag} alt={country.name} />
        </div>
        <div className="card-text">
          <h2 className="name f-lg-xl">{country.name}</h2>
          <p>Population: {country.population}</p>
          <p>Region:{country.region}</p>
          <p>Capital:{country.capital}</p>
        </div>
      </Link>
    </StledCard>
  );
};

const StledCard = styled.div`
  border: 1px solid ${COLOR.grey};
  border-radius: 5px;
  box-shadow: 2px 2px 10px 2px ${COLOR.grey};

  .card-img {
    overflow: hidden;
    width: 100%;
    height: 150px;
    object-fit: cover;
    outline: 1px solid ${COLOR.grey};
    background-color: ${COLOR.lightGrey};

    img {
      height: 150px;
      object-fit: cover;
    }
  }

  .card-text {
    padding: 10px;

    .name {
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      line-height: 20px;
    }
  }
`;

export default Card;
