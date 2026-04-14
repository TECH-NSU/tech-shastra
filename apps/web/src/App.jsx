import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
import Hero from "./Pages/hero";
import Timeline from "./Pages/timeline";

// Optional: global styles
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Hero />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;
