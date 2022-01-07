import React from "react";
import "../../css/Filter/Filter.css";
function Filter(props) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title"> Filter </h2>
      <div className="num-of-products"> Number of products 4 </div>
      <div className="filter-by-size">
        <span> Filter </span>
        <select className="filter-select">
          <option value="ALL"> ALL </option>
          <option value="XS"> XS </option>
          <option value="S"> S </option>
          <option value="M"> M </option>
          <option value="L"> L </option>
          <option value="XL"> ALL </option>
          <option value="XXL"> XXL </option>
          <option value="3XL"> 3XL </option>
        </select>
      </div>
      <div className="filter-by-order">
        <span> Order </span>
        <select className="filter-select">
          <option value="Latest"> Latest </option>
          <option value="Lowest"> Lowest </option>
          <option value="Heighest"> Heighest </option>
        </select>
      </div>
    </div>
  );
}
export default Filter;
