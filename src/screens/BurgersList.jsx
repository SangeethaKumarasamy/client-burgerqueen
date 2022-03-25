import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";
import { getAllBurgers } from "../actions/burgerActions";
import { Link } from "react-router-dom";

function BurgersList() {
  const dispatch = useDispatch();
  const burgersState = useSelector((state) => state.getAllBurgersReducer);
  const { burgers, error, loading } = burgersState;
  useEffect(() => {
    dispatch(getAllBurgers());
  }, []);
  return (
    <div>
      <h2>Burgers List</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong !!" />}
      <table className="table table-dark table-striped border">
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {burgers &&
            burgers.map((burger) => {
              return (
                <tr>
                  <td>{burger.name}</td>
                  <td>
                    Quarter:{burger.prices[0]["Quarter"]}
                    <br />
                    Double:{burger.prices[0]["Double"]}
                    <br />
                    Big_Mac:{burger.prices[0]["Big_Mac"]}
                  </td>
                  <td>{burger.category}</td>
                  <td>
                    <i className="fa fa-trash m-2"></i>
                    <Link to={`/admin/editBurger/${burger._id}`}>
                      <i className="fa fa-edit m-2"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default BurgersList;
