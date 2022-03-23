import React, { useState, useEffect } from "react";

function AddBurger() {
  const [name, setName] = useState("");
  const [quarterPrice, setQuarterPrice] = useState();
  const [doublePrice, setDoublePrice] = useState();
  const [bigMacPrice, setBigMacPrice] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();

  function formHandler(e) {
    e.preventDefault();
    const burger = {
      name,
      imageUrl,
      description,
      category,
      prices: {
        quarterPrice: quarterPrice,
        doublePrice: doublePrice,
        bigMacPrice: bigMacPrice,
      },
    };
    console.log(burger);
  }
  return (
    <div>
      <div>
        <h2>Add Burger</h2>
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
            placeholder="image URL"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
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
