import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import burgers from "../burgerdata";
import Burger from "../components/Burger";
import { getAllBurgers } from "../actions/burgerActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

function HomeScreen() {
  const dispatch = useDispatch();

  const burgersState = useSelector((state) => state.getAllBurgersReducer);

  const { burgers, error, loading } = burgersState;
  useEffect(() => {
    dispatch(getAllBurgers());
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong !!"/>
        ) : (
          burgers.map((burger) => {
            return (
              <div className="col-md-3 m-3" key={burger._id}>
                <div>
                  <Burger burger={burger} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
