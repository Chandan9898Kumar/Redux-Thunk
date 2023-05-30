import React, { memo } from "react";
import "../../App.css";
import { addItemsToCart } from "../../Services/Actions/Action";
import { connect } from "react-redux";
const RenderItems = ({ items, ...props }) => {
  const {
    addItemToCart,
    data: { addedItems, apiData },
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
            className="buttonAdd"
            onClick={() => addItemToCart({ ...items, disabled: true })}
          >
            Add
          </button>
          <button className="buttonRemove">Remove</button>
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
  addItemToCart: (data) => dispatch(addItemsToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(RenderItems));
