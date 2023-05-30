import "../../App.css";
import { connect } from "react-redux";
import { FaBeer } from "react-icons/fa";
const Header = ({ addedItems }) => {
  return (
    <>
      <div className="totalItemText">My Cart</div>
      <div className="IconHead">
        <div className="icon">
          <FaBeer />
        </div>
        <div className="round">
          <div className="completedRound">
            {addedItems && addedItems.length}
          </div>
        </div>
      </div>
    </>
  );
};
// export default Header;

const mapStateToProps = (state) => {
  return state.Products;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
