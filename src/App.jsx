//import icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import Main from "./components/Main.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Main />
    </BrowserRouter>
  );
}

export default App;
