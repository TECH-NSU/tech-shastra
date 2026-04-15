import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
import Hero from "./Pages/hero";
import Timeline from "./Pages/timeline";
import Contact from "./Pages/contact";

// Optional: global styles
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Hero />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
