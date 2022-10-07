import React from 'react'
import Home from './Home';
import Drinks from "./Drinks";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function Pages() {

  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
        <Routes Location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/drinks/:type" element={<Drinks />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />}/>
        </Routes>
      </AnimatePresence>
  );
}

export default Pages;