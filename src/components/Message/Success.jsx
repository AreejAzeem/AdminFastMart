import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import successAnimation from "../../Lotties/standardGreenSuccess.json";

const Success = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: successAnimation,
    });
    return () => lottie.stop();
  }, []);
  return (
  
  <div ref={anime} style={{ height: 70, width: 70}} ></div>
  )
};

export default Success;
