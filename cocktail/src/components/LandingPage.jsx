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
                <h1 class="main=text">Your New</h1>
                <h1 class="main=text">FAVORITE Drink</h1>
                <p>Whether you are experienced or are just starting out</p>
                <p>have confidence making the latest and tastiest drinks!</p>
                <p>You might even find your new favorite drink</p>
            </div>
        </div>
    </motion.div>
  )
}



export default LandingPage