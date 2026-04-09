import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
import Hero from "./Pages/hero";

// Optional: global styles
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
