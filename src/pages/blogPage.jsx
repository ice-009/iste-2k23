import React from 'react'
import {motion} from "framer-motion/dist/framer-motion"


const blogPage = () => {
  return (
    <motion.div 
    inital = {{opacity:0}}
    animate = {{opacity:1}}
    exit = {{opacity:0}}
    transition = {{duration:0.5}} >blogPage</motion.div>
  )
}

export default blogPage