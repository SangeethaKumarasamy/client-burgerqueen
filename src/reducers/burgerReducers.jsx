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

export const getBurgerByIdReducer = (state = { }, action) => {
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

export const addBurgerReducer = (state = {} , action) => {
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
