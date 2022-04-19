import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/login/login";
import Accueil from "./Components/Accueil/Acceuil";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
