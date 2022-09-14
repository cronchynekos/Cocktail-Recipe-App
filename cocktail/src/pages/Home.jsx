import Vodka from "../components/Vodka";
import Popular from "../components/Popular";
import NonAlcohol from "../components/NonAlcohol";
import {motion} from 'framer-motion';
import styled from "styled-components";


import React from 'react'

function Home() {
  return (
    <Rectangle>
      <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.75}}
      >
          <Popular />
          <Vodka />
          <NonAlcohol />
      </motion.div>
    </Rectangle>

  )
}

const Rectangle = styled.div`
  // background: white;
`



export default Home