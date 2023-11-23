import React, { useRef } from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap/gsap-core";
import "./Logo.scss";

const Logo = () => {
  const logoRef = useRef();

  useLayoutEffect(() => {
    gsap.from(logoRef.current, {
      y: -200,
      delay:0.5,
      opacity: 0,
    });
  });
//   const el = useRef();
//   const tl = useRef();

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       tl.current = gsap.timeline().to(".main-logo", {
//         y:-100,
//         opacity:0,
//       });
//     }, el);
//   }, );

  return (
    <div ref={logoRef}>
    <div className="main-logo" >
      <img src="images/Space/logo_main.png" alt="logo"></img>
    </div>
    </div>
  );
};

export default Logo;
