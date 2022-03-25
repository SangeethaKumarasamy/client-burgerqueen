export const getAllBurgersReducer = (state = { burgers: [] }, action) => {
  switch (action.type) {
    case "GET_BURGERS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_BURGERS_SUCCESS":
      return {
        loading: false,
        burgers: action.payload,
      };
    case "GET_BURGERS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getBurgerByIdReducer = (state = {burgers:null}, action) => {
  switch (action.type) {
    case "GET_BURGERSBYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_BURGERSBYID_SUCCESS":
      return {
        loading: false,
        burgers: action.payload,
      };
    case "GET_BURGERSBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addBurgerReducer = (state = { } , action) => {
  switch (action.type) {
    case "ADD_BURGER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_BURGER_SUCCESS":
      return {
        loading: false,
        burgers: true,
      };
    case "ADD_BURGER_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const editBurgerReducer = (state = {} , action) => {
  switch (action.type) {
    case "EDIT_BURGER_REQUEST":
      return {
        editloading: true,
        ...state,
      };
    case "EDIT_BURGER_SUCCESS":
      return {
        editloading: false,
        editburgers: true,
      };
    case "EDIT_BURGER_FAILED":
      return {
        editerror: action.payload,
        editloading: false,
      };
    default:
      return state;
  }
};
