import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_REQUEST" });
  try {
    const response = await axios.get(`${BASE_URL}/api/burgers/getallburgers`);
    console.log(response);
    dispatch({ type: "GET_BURGERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAILED", payload: error });
  }
};

export const getBurgerById = (burgerid) => async (dispatch) => {
  dispatch({ type: "GET_BURGERSBYID_REQUEST" });
  try {
    const response = await axios.post(`${BASE_URL}/api/burgers/getburgerbyid`, {
      burgerid,
    });
    console.log(response);
    dispatch({ type: "GET_BURGERSBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERSBYID_FAILED", payload: error });
  }
};

export const filterBurgers = (searchkey, category) => async (dispatch) => {
  var filteredBurgers;
  dispatch({ type: "GET_BURGERS_REQUEST" });
  try {
    const response = await axios.get(`${BASE_URL}/api/burgers/getallburgers`);
    filteredBurgers = response.data.filter((burger) =>
      burger.name.toLowerCase().includes(searchkey)
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
    const response = await axios.post(`${BASE_URL}/api/burgers/addburger`, {
      burger,
    });
    console.log(response);
    dispatch({ type: "ADD_BURGER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_BURGER_FAILED", payload: error });
  }
};

export const editBurger = (editedburger) => async (dispatch) => {
  dispatch({ type: "EDIT_BURGER_REQUEST" });
  try {
    const response = await axios.post(`${BASE_URL}/api/burgers/editburger`, {
      editedburger,
    });
    console.log(response);
    dispatch({ type: "EDIT_BURGER_SUCCESS" });
    window.location.href = "/admin/burgersList";
  } catch (error) {
    dispatch({ type: "EDIT_BURGER_FAILED", payload: error });
  }
};

export const deleteBurger = (burgerid) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/burgers/deleteburger`, {
      burgerid,
    });
    alert("Burger deleted successfully !!");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong !!");
    console.log(error);
  }
};
