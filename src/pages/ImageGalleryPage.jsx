import React from 'react'
import ImageGallery from '../components/ImageGallery'
import {motion} from "framer-motion/dist/framer-motion"

const ImageGalleryPage = () => {
  return (
    <motion.div 
    inital = {{opacity:0}}
    animate = {{opacity:1}}
    exit = {{opacity:0}}
    transition = {{duration:0.5}} >
    {/* <div className='gallery-page'>ImageGalleryPage</div> */}
    <ImageGallery />
    </motion.div>
  )
}

export default ImageGalleryPage