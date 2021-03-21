import styled from "styled-components";
import Card from "../../components/Card";

const CardList = ({ countries }) => {
  return (
    <StyledCardLIst>
      {countries.map((country, index) => {
        return <Card country={country} key={index} />;
      })}
    </StyledCardLIst>
  );
};

const StyledCardLIst = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export default CardList;
