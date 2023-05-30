import { SET_Products, Add_To_Cart, Remove_From_Cart } from "../Constants";

const initialState = {
  apiData: [],
  addedItems: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_Products:
      return {
        ...initialState,
        apiData: action.payload.map((item) => {
          return {
            ...item,
            disabled: false,
          };
        }),
      };

    case Add_To_Cart:
      return {
        ...state,
        addedItems: [...state.addedItems, action.payload],
        apiData: state.apiData.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              disabled: true,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default productReducer;
