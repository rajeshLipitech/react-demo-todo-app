import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../todoList/actions";
import { VISIBILITY_FILTERS } from "../todoList/constants";
import styled from "styled-components";

interface visibilityFilterInterface {
  activeFilter: string;
  setFilter: any;
}

const FilterOption = styled.span`
  padding-right: 10px;
`;

const VisibilityFilters: React.FC<visibilityFilterInterface> = ({
  activeFilter,
  setFilter,
}) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey: string) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <FilterOption
            key={`visibility-filter-${currentFilter}`}
            style={
              currentFilter === activeFilter ? { borderBottom: "solid" } : {}
            }
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </FilterOption>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
