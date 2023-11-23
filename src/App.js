import React from "react";
import { Home, Login, AddPet, EditBiodata} from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addpet" element={<AddPet />} />
      <Route path="/editbiodata" element={<EditBiodata />} />
    </Routes>
  );
};

export default App;
