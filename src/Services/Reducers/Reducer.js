import { SET_Products, Add_To_Cart, Remove_From_Cart } from "../Constants";

const initialState = {
  apiData: [],
  addedItems:[]
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_Products:
      return { ...initialState, apiData: action.payload };

    default:
      return state;
  }
};

export default productReducer;
