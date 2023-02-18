import { BrowserRouter ,  Route, Routes } from "react-router-dom"
import Home from "./scenes/home";
import Dashboard from "./scenes/dashboard";
import Signup from "./scenes/signup";
import Stepone from "./components/sections/stepone";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stepone" element={<Stepone />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
