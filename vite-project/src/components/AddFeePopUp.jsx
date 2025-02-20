import React from "react";

function AddFeePopup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-header">
          <h2>Add Fee</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="popup-body">
          <div className="form-group">
            <label>Fee Name</label>
            <input type="text" placeholder="Maintenance" />
          </div>

          <div className="form-group">
            <label>Value</label>
            <input type="number" placeholder="0" />
          </div>

          <div className="form-group">
            <label>Currency</label>
            <div className="radio-group">
              <label><input type="radio" name="currency" value="NGN" defaultChecked /> NGN</label>
              <label><input type="radio" name="currency" value="USD" /> USD</label>
            </div>
          </div>

          <div className="form-group">
            <label>Fee Frequency</label>
            <div className="radio-group">
              <label><input type="radio" name="frequency" value="One Off" /> One Off</label>
              <label><input type="radio" name="frequency" value="Monthly" /> Monthly</label>
            </div>
          </div>

          <div className="form-group">
            <label>Fee Impact</label>
            <div className="radio-group">
              <label><input type="radio" name="impact" value="Issuance" /> Issuance</label>
              <label><input type="radio" name="impact" value="Pin Reissue" /> Pin Reissue</label>
            </div>
          </div>

          <div className="form-group">
            <label>Account Pad</label>
            <div className="radio-group">
              <label><input type="radio" name="pad" value="None" defaultChecked /> None</label>
              <label><input type="radio" name="pad" value="Branch Prefix" /> Branch Code Prefix</label>
              <label><input type="radio" name="pad" value="Branch Suffix" /> Branch Code Suffix</label>
            </div>
          </div>

          <div className="form-group">
            <label>Account</label>
            <input type="text" placeholder="Enter account details" />
          </div>
        </div>

        <div className="popup-footer">
          <button className="add-fee-btn" onClick={onClose}>Add Fee</button>
        </div>
      </div>
    </div>
  );
}

export default AddFeePopup;
