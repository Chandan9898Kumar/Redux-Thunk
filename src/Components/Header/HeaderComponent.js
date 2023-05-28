import "../../App.css";
import { FaBeer } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className="totalItemText">My Cart</div>
      <div className="IconHead">
        <div className="icon">
          <FaBeer />
        </div>
        <div className="round">
          <div className="completedRound">hi</div>
        </div>
      </div>
    </>
  );
};
export default Header;
