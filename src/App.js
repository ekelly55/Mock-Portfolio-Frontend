import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
// IMPORT PAGES

import About from "./pages/About";
import Projects from "./pages/Projects";

function App(props) {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://mock-portfolio-backend.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <div className="footer-container" style={{position: "fixed", left: 0, right: 0, bottom: 0}}>

      <Footer />
      </div>
    </div>
  );
}

export default App;