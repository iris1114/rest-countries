import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { COLOR } from "../../utils/style";

const Filter = ({ onSearchChange, onSelectChange }) => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <StyledFilter>
      <div className="search-wrap">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <input
          type="text"
          className="search f-lg-m"
          placeholder="search for a country"
          onChange={(e) => {
            onSearchChange && onSearchChange(e.target.value);
          }}
        />
      </div>

      <div className="select-wrap">
        <select
          name="region"
          id="region"
          defaultValue={"DEFAULT"}
          className="f-lg-m"
          onChange={(e) => {
            onSelectChange && onSelectChange(e.target.value);
          }}
        >
          <option value="DEFAULT" disabled>
            Filter by Region
          </option>
          <option value="">All</option>
          {regions.map((region, index) => {
            return (
              <option key={index} value={region}>
                {region}
              </option>
            );
          })}
        </select>
      </div>
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  padding: 40px 40px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  .search-wrap {
    border: 1px solid ${COLOR.grey};
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 40px;
    width: 250px;
    padding: 0px 20px;
    background-color: ${COLOR.white};

    .icon {
      color: ${COLOR.black};
    }

    .search {
      border: 1px solid transparent;
      margin-left: 10px;
      outline: 0;
    }
  }

  .select-wrap {
    position: relative;
    border: 1px solid ${COLOR.grey};
    border-radius: 5px;

    select {
      height: 40px;
      width: 200px;
      border: 1px solid transparent;
      outline: 1px solid transparent;
      -moz-appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      padding: 0px 20px;
    }
    &:after {
      color: ${COLOR.black};
      content: "▾";
      pointer-events: none;
      position: absolute;
      right: 20px;
      top: 7px;
      font-size: 20px;
    }
  }
  @media screen and (max-width: 767px) {
    .search-wrap {
      width: 100%;
      margin-bottom: 20px;
    }
    .select-wrap {
      width: 100%;
      select {
        width: 100%;
      }
    }
  }
`;

export default Filter;
