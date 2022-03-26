import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

function Burger({ burger }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("Quarter");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCart(burger, quantity, variant))
  }

  return (
    <div key={burger._id} className="shadow-lg mb-3 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{burger.name}</h1>
        <img
          src={burger.image}
          className="image-fluid"
          style={{ height: "180px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {burger.variants.map((variant,id) => {
              return <option value={variant} key={id}>{variant}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1} key={i}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price: ₹ {burger.prices[0][variant] * quantity}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>
            Add to Cart
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{burger.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={burger.image}
            className="image-fluid"
            style={{ height: "300px" }}
          />
          <p>{burger.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Burger;
