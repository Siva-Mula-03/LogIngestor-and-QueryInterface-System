// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      © 2023 Company Name. All rights reserved.
      <br></br>
      <br></br>
      Designed and Developed by <a style={{ color: "pink" }} target="_blank" href="https://sivamula-portfolio-website.vercel.app/">Siva Mula</a>

    </footer>
  );
};

export default Footer;
