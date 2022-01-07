import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal/ProductModal";
function Products(props) {
  const [product, setProduct] = useState("");
  const OpenModal = (product) => {
    setProduct(product);
  };
  const CloseModal = () => {
    setProduct(false);
  };
  return (
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <a
            href="#"
            onClick={() => {
              OpenModal(product);
            }}
          >
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>$ {product.price}</span>
          </div>
          <button>Add to Cart</button>
        </div>
      ))}
      <ProductModal product={product} CloseModal={CloseModal} />
    </div>
  );
}
export default Products;
