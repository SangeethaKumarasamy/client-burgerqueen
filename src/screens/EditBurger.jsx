import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerById } from "../actions/burgerActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

function EditBurger() {
  const { burgerid } = useParams();
  const [name, setName] = useState("");
  const [quarterPrice, setQuarterPrice] = useState(0);
  const [doublePrice, setDoublePrice] = useState(0);
  const [bigMacPrice, setBigMacPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const getburgerbyidstate = useSelector((state) => state.getBurgerByIdReducer);
  const { burgers: burger, error, loading } = getburgerbyidstate;

  const editburgerstate = useSelector((state) => state.editBurgerReducer);
  const { editburger, editloading, editsuccess } = editburgerstate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!burger) {
      dispatch(getBurgerById(burgerid));
    } else {
      setName(burger.name);
      setDescription(burger.description);
      setCategory(burger.category);
      setQuarterPrice(burger.prices[0]["Quarter"]);
      setDoublePrice(burger.prices[0]["Double"]);
      setBigMacPrice(burger.prices[0]["Big_Mac"]);
      setImage(burger.image);

      dispatch(getBurgerById(burgerid));
    }
  }, [burger, dispatch]);

  function formHandler(e) {
     e.preventDefault();

    const editedburger = {
      _id: burgerid,
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
    // console.log(editedburger);
    dispatch(editburger(editedburger));
  }

  return (
    <div>
      <h2>Edit Burger</h2>
      <h4>Burger Id : {burgerid}</h4>
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="Something went wrong !!" />}

        {editsuccess && (
          <Success success="Burger Details successfully updated" />
        )}
        {editloading && <Loading />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
               //e.preventDefault();
              setName(e.target.value);
              console.log(name);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Quarter variant price"
            value={quarterPrice}
            onChange={(e) => {
               //e.preventDefault();
              setQuarterPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Double variant price"
            value={doublePrice}
            onChange={(e) => {
               //e.preventDefault();
              setDoublePrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Big-Mac variant price"
            value={bigMacPrice}
            onChange={(e) => {
               //e.preventDefault();
              setBigMacPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Image "
            value={image}
            onChange={(e) => {
               //e.preventDefault();
              setImage(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
               //e.preventDefault();
              setDescription(e.target.value);
            }}
          />

          <input
            className="form-control"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => {
               //e.preventDefault();
              setCategory(e.target.value);
            }}
          />
          <br />
          <button className="btn" type="submit">
            Edit Burger
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditBurger;
