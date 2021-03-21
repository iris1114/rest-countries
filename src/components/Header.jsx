import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1 className="f-lg-2xl f-l">Where in the world?</h1>
      <div className="mode">
        <FontAwesomeIcon icon={faMoon} className="icon" />
        <span className="f-lg-l f-m">Dark Mode</span>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  box-shadow: 2px 2px 10px 1px #ccc;

  .mode {
    cursor: pointer;
    .icon {
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 20px 15px;
  }
`;

export default Header;
