import React from "react";
import { Home, Login, AddPet} from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addpet" element={<AddPet />} />
    </Routes>
  );
};

export default App;
