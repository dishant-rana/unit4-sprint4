import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainRoutes } from "./Routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
