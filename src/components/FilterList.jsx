import { useState } from "react";

const FilterList = ({ clearTodo, sortedFn }) => {
  const [value, setValue] = useState("none");
  const changeHandler = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    if (selectedValue === "atoz") {
      sortedFn("atoz");
    } else if (selectedValue === "ztoa") {
      sortedFn("ztoa");
    } else {
      return;
    }
  };
  return (
    <div className="filter-area">
      <select onChange={changeHandler} value={value}>
        <option value="none" disabled>
          Select option
        </option>
        <option value="atoz">A-Z</option>
        <option value="ztoa">Z-A</option>
      </select>
      <button onClick={clearTodo}>clear All</button>
    </div>
  );
};

export default FilterList;
