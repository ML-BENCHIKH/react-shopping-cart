import React, { useState } from "react";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
//import { words } from "./words";
import data from "./data.json";
function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="layout">
      <Header />
      <div className="wrapper">
        <Products products={products} />
        <Filter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
