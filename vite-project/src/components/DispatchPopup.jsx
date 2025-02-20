import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DispatchPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <FaCheckCircle color="#2ECC71" size={40} />
        <h2>Successful</h2>
        <p>Card batch successfully sent to dispatch.</p>
        <button onClick={onClose}>Continue</button>
      </div>
    </div>
  );
};

export default DispatchPopup;
