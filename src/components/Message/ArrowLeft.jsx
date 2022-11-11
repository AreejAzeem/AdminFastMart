import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import arrowAnimation from "../../Lotties/arrowLeft.json";

const ArrowLeft = ({showDiv}) => {
  const anime = useRef(null);
  const showdiv=()=>{
    showDiv(false);
  }
  useEffect(() => {
    
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: arrowAnimation,
    });
    return () => lottie.stop();
  }, []);
  return (
  
  <div ref={anime} style={{ height: 90, width: 80, cursor:'pointer'}} onClick={showdiv} ></div>
  )
};

export default ArrowLeft;
