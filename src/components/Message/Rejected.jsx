import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import rejectAnimation from "../../Lotties/rejected.json";

const Rejected = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: rejectAnimation,
    });
    return () => lottie.stop();
  }, []);
  return (
  
  <div ref={anime} style={{ height: 70, width: 70}} ></div>
  )
};

export default Rejected;
