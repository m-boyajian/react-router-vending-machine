import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Pie from './Pie';
import Beer from './Beer';
import Ramen from './Ramen';

function VendingMachine() {

  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/beer" element={<Beer />} />
          <Route path="/ramen" element={<Ramen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;