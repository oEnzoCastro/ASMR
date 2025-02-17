import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import DiceRoll from "./components/DiceRoll";
import NotFound from "./pages/NotFound";
import Members from "./pages/Members";
import Sobre from "./pages/Sobre";
import Simulador from "./pages/Simulador";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route index element={<DiceRoll></DiceRoll>}></Route>
        <Route path="/Members" element={<Members></Members>}></Route>
        <Route path="/Sobre" element={<Sobre></Sobre>}></Route>
        <Route path="/Simulador" element={<Simulador></Simulador>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
