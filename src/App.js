import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Item from "./Pages/Item";
import SignIn from "./Pages/SignIn";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
