import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBurger } from "../actions/burgerActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

function AddBurger() {
  const [name, setName] = useState("");
  const [quarterPrice, setQuarterPrice] = useState();
  const [doublePrice, setDoublePrice] = useState();
  const [bigMacPrice, setBigMacPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();

  const dispatch = useDispatch();

  const addBurgerState = useSelector((state) => state.addBurgerReducer);
  const { loading, error, success } = addBurgerState;

  function formHandler(e) {
    e.preventDefault();
    const burger = {
      name,
      image,
      description,
      category,
      prices: {
        Quarter: quarterPrice,
        Double: doublePrice,
        Big_Mac: bigMacPrice,
      },
    };
    console.log(burger);
    dispatch(addBurger(burger));
  }
  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h2>Add Burger</h2>
        {loading && (<Loading/>)}
        {error && (<Error error="Something went wrong !!"/>)}
        {success && (<Success success="New Burger added successfully !!"/>)}

        
        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Quarter variant price"
            value={quarterPrice}
            onChange={(e) => {
              setQuarterPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Double variant price"
            value={doublePrice}
            onChange={(e) => {
              setDoublePrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Big-Mac variant price"
            value={bigMacPrice}
            onChange={(e) => {
              setBigMacPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Image Url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <input
            className="form-control"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <br />
          <button className="btn" type="submit">
            Add Burger
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddBurger;
