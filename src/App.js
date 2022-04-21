import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./app.css";

//Import the pages

import Page1 from "./Components/page1"
import Page2 from "./Components/page2"
import Page3 from "./Components/page3"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Birthday Countdown</h1>} />
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Countdown to Rudy's Birthday</Link></li>
            <li><Link to="page2">Countdown to Ryan's Birthday</Link></li>
            <li><Link to="page3">Countdown to Portia's Birthday</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default App;
