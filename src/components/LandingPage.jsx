import React from 'react'
import {motion} from 'framer-motion';

function LandingPage() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 1}}
    >
        <div class="hero"> 
            <div class="container spacing">
                <h1 class="main=text">Your New <br/> FAVORITE Drink</h1>
                <p>Whether you are experienced or are just starting out, 
                <br/>have confidence making the latest and tastiest drinks! 
                <br/>You might even find your new favorite cocktail</p>
            </div>
        </div>
    </motion.div>
  )
}



export default LandingPage