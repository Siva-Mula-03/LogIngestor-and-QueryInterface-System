// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        bottom: "0",
        width: "100%",
        marginTop:"80%"
      }}
    >
      © 2024 LogIngestor & Query Interface. All rights reserved.
      <br></br>
      <br></br>
      Designed and Developed by <a style={{ color: "cyan" }} rel="noopener noreferrer" target="_blank" href="https://sivamula-portfolio-website.vercel.app/">Siva Mula</a>

    </footer>
  );
};

export default Footer;
