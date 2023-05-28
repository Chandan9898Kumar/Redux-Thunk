import { SET_Products, Add_To_Cart, Remove_From_Cart } from "../Constants";

//  Here we are applying Thunk
// fetchProducts() is the "thunk action creator"
export const fetchProducts = () => {
  //  thunk send dispatch method as a parameter.\
    // fetchDataByThunk is the "thunk function"
  return async function fetchDataByThunk(dispatch) {
    const result = await fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "asos2.p.rapidapi.com",
          "x-rapidapi-key":
            "1949ed3468msh573f2b5adccd778p14beffjsn12e69f0cac40",
        },
      }
    );

    const data = await result.json();
    dispatch(sendProducts(data.products));
  };
};
//  we are calling sendProducts() function  inside fetchProducts() function,to perform asynchronous functionality.
export const sendProducts = (data = []) => {
  if (data) {
    return {
      type: SET_Products,
      payload: data,
    };
  }
  return {
    type: SET_Products,
    payload: [],
  };
};
