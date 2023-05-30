import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import { fetchProducts } from "../../Services/Actions/Action";
import RenderItems from "./RenderItems";
import "../../App.css";
const MainComponent = (props) => {
  const {
    getApiData,
    Data: { apiData },
  } = props;

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="headerStatus">
        <div style={{ width: "50%" }}>Cart Items</div>
        <div style={{ width: "50%" }}>
          Total Items :{"  "}
          {apiData && apiData.length > 0 ? (
            apiData.length
          ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      </div>
      <div className="itemContainer">
        {apiData &&
          apiData.length > 0 &&
          apiData.map((items) => {
            return <RenderItems items={items} key={items.id} />;
          })}
      </div>
    </>
  );
};

//  to access store data.
const mapStateToProps = (state) => ({
  Data: state.Products,
});

//  to trigger action
const mapDispatchToProps = (dispatch) => ({
  getApiData: () => dispatch(fetchProducts()),
});
//  To access all the data from redux we just have to connect it.
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
