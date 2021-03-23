import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../utils/themeContext";

const Header = () => {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <StyledHeader theme={theme}>
      <Link to="/">
        <h1 className="f-lg-2xl f-l">Where in the world?</h1>
      </Link>
      <div className="mode" onClick={toggle}>
        {dark ? (
          <>
            <FontAwesomeIcon icon={faSun} className="icon" />
            <span className="f-lg-l f-m">Light Mode</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} className="icon" />
            <span className="f-lg-l f-m">Dark Mode</span>
          </>
        )}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  box-shadow: 2px 2px 10px 1px ${(props) => props.theme.shadow};
  z-index: 1;

  h1 {
    color: ${(props) => props.theme.color};
  }

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
