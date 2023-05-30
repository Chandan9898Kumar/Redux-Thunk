import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/HeaderComponent";
import MainComponent from "./Components/RenderComponents/MainComponents";
function App() {
  return (
    <div className="App">
      <div className="totalItemAdded">
        <Header />
      </div>
      <div className="renderAllItems">
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
