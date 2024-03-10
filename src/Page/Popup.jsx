import React from "react";
import Modal from "react-modal";

const Popup = ({ isOpen, onClose, message, backgroundColor, textColor }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          color: textColor || "black",
          backgroundColor: backgroundColor || "lightgray",
          borderRadius: "10px",
          textAlign: "center",
          width: "200px", // Adjust the width as needed
          height:"150px",
          margin: "auto", // Center the popup
        },
      }}
    >
      <h2 style={{ color: "red", fontSize: "18px" }}>Oops!</h2>
      <p style={{ fontSize: "20px" }}>{message}</p>
      <button style={{ fontSize: "14px", padding: "8px" }} onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default Popup;
