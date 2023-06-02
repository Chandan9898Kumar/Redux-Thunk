import React, { memo } from "react";
import "../../App.css";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../Services/Actions/Action";
import { connect } from "react-redux";
const RenderItems = ({ items, ...props }) => {
  const {
    addItemToCart,
    removeDataFromCart,
    data
  } = props;

  return (
    <>
      <div className="subContainer">
        <img src={"https://" + items.imageUrl} alt={items.name} />
        <div className="itemsNamePrice">
          <div>{items.brandName}</div>
          <div>{items.price.current.text}</div>
        </div>
        <div className="Buttons">
          <button
            disabled={items.disabled}
            className={
              items && items.disabled ? "buttonAddDisabled" : "buttonAdd"
            }
            onClick={() => addItemToCart({ ...items, disabled: true })}
          >
            Add
          </button>
          <button
            disabled={!items.disabled}
            className={
              items && !items.disabled ? "buttonRemoveDisabled" : "buttonRemove"
            }
            onClick={() => removeDataFromCart({ ...items, disabled: false })}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
// export default memo(RenderItems);

const mapStateToProps = (state) => ({
  data: state.Products,
});
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (addedData) => dispatch(addItemsToCart(addedData)),
  removeDataFromCart: (removeData) => dispatch(removeItemsFromCart(removeData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(RenderItems));
