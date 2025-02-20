import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import from react-icons

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-icon">
          <FaCheckCircle color="#2ECC71" size={40} />
        </div>

        <h2 className="popup-title">Successful</h2>
        <p className="popup-message">Production file has been downloaded.</p>

        <button className="popup-btn" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
