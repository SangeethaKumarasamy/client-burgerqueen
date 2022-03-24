import axios from "axios";

export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_REQUEST" });
  try {
    const response = await axios.get("/api/burgers/getAllBurgers");
    console.log(response);
    dispatch({ type: "GET_BURGERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAILED", payload: error });
  }
};
export const filterBurgers = (searchKey, category) => async (dispatch) => {
  var filteredBurgers;
  dispatch({ type: "GET_BURGERS_REQUEST" });
  try {
    const response = await axios.get("/api/burgers/getAllBurgers");
    filteredBurgers = response.data.filter((burger) =>
      burger.name.toLowerCase().includes(searchKey)
    );
    if (category != "all") {
      filteredBurgers = response.data.filter(
        (burger) => burger.category.toLowerCase() == category
      );
    }
    dispatch({ type: "GET_BURGERS_SUCCESS", payload: filteredBurgers });
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAILED", payload: error });
  }
};

export const addBurger = (burger) => async (dispatch) => {
  dispatch({ type: "ADD_BURGER_REQUEST" });
  try {
    const response = await axios.post("/api/burgers/addburger", { burger });
    console.log(response);
    dispatch({ type: "ADD_BURGER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_BURGER_FAILED", payload: error });
  }
};
