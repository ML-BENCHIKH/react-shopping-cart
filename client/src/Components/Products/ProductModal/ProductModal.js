import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
function ProductModal(props) {
  const { product, CloseModal } = props;

  return (
    <Modal isOpen={product} onRequestClose={CloseModal}>
      <span className="close-icon" onClick={CloseModal}>
        &times;
      </span>
      <div className="product-info">
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.desc}</p>
        <p>$ {product.price}</p>
      </div>
    </Modal>
  );
}
export default ProductModal;
