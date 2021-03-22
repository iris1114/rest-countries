import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { COLOR } from "../../utils/style";

const Filter = ({ onSearchChange, onSelectChange }) => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <StyledFilter>
      <div className="search-wrap">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          className="search"
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
          onChange={(e) => {
            onSelectChange && onSelectChange(e.target.value);
          }}
        >
          <option value="" selected disabled>
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

  .search-wrap {
    border: 1px solid ${COLOR.grey};
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    align-items: center;

    .search {
      border: 1px solid transparent;
      margin-left: 10px;
      outline: 0;
    }
  }
`;

export default Filter;
