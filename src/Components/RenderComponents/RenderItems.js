import React, { memo } from "react";
import "../../App.css";
const RenderItems = ({ items }) => {
  return (
    (
      <>
        <div className="subContainer">
          <img src={"https://" + items.imageUrl} alt={items.name} />
          <div className="itemsNamePrice">
            <div>{items.brandName}</div>
            <div>{items.price.current.text}</div>
          </div>
          <div></div>
        </div>
      </>
    )
  );
};
export default memo(RenderItems);
