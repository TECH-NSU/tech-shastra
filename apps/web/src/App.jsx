import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
import Hero from "./Pages/hero";
import Homepage from "./Pages/Hompage";

// Optional: global styles
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Hero Landing Page */}
        <Route path="/" element={<Hero />} />
        {/* Homepage */}
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
