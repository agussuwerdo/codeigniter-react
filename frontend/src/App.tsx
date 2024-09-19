import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { getApiUrl } from "./helpers/url";

function App() {
  return (
    <header className="App-header">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href={getApiUrl()} target="_blank" rel="noopener noreferrer">
                Backend API
              </a>
            </li>
          </ul>
        </nav>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </header>
  );
}

export default App;
