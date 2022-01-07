import React, { useState } from "react";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
//import { words } from "./words";
import data from "./data.json";
function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const handleFilterbySize = (event) => {
    setSize(event.target.value);
    if (event.target.value == "ALL") {
      setProducts(data);
    } else {
      let ProductsClone = [...products];
      let newProducts = ProductsClone.filter(
        (p) => p.sizes.indexOf(event.target.value) != -1
      );
      setProducts(newProducts);
    }
  };
  const handleFilterbyOrder = (event) => {
    let order = event.target.value;
    setSort(order);
    let ProductsClone = [...products];
    let newProducts = ProductsClone.sort(function (a, b) {
      if (order === "Lowest") {
        return a.price - b.price;
      } else if (order === "Heighest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };
  return (
    <div className="layout">
      <Header />
      <div className="wrapper">
        <Products products={products} />
        <Filter
          size={size}
          sort={sort}
          handleFilterbySize={handleFilterbySize}
          handleFilterbyOrder={handleFilterbyOrder}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
