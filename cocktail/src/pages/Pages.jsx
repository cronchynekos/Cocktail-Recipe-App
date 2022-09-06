import React from 'react'
import Home from './Home'
import Drinks from "./Drinks";
import { Route, Routes } from 'react-router-dom'

function Pages() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks/:type" element={<Drinks />} />
      </Routes>

  );
}

export default Pages;