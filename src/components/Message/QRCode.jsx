import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import qrAnimation from "../../Lotties/qrCode.json";

const QRCode= ({showDiv}) => {
  const anime = useRef(null);
  const showdiv=()=>{
    showDiv(true);
  }
  useEffect(() => {
    
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: qrAnimation,
    });
    return () => lottie.stop();
  }, []);
  return (
  <div ref={anime} style={{ height: 120, width: 120}} onClick={showdiv} ></div>
  )
};

export default QRCode;
