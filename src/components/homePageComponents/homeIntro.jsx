import React,{useEffect,useRef} from 'react';
import Logo from '../../static/images/iste-logo-blue.png';
import GraphicAnimation from '../graphicAnimation';
import animationData from "../../static/svgs/intro-animation-light.json"
// import BackgroundParticles from '../BackgroundParticles';
import {motion,useInView,useAnimation} from "framer-motion/dist/framer-motion"

const HomeIntro = () => {

  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const mainControls = useAnimation();

  useEffect(()=>{
    if (isInView){
      mainControls.start("visible")
    }
  },(isInView))

  return (
    <div ref={ref}>
    <motion.div className="intro-container container-fluid"
     variants = {{
      hidden: {opacity:0,y:75},
      visible: {opacity:1,y:0},
    }}
    inital = "hidden"
    animate = {mainControls}
    transition = {{duration:0.5,delay:0.25}}
    >
     
      <div className="row">
        <div className="left-content">
          <img src={Logo} alt="" className="intro-logo" />
          <h1>ISTE</h1>
        </div>
        <div className="right-content"> 
          <GraphicAnimation animationData={animationData} />
        </div>
      </div>
      
    </motion.div>
    </div>
  );
};

export default HomeIntro;
