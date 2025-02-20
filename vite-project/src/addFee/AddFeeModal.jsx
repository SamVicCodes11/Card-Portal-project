import React from "react";

const AddFeeModal = ({ setShowModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Fee</h3>
          <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
        </div>
        <p>Fill in fee details.</p>

        <div className="form-group">
          <label>Fee Name*</label>
          <input type="text" defaultValue="Maintenance" />
        </div>

        <div className="form-group">
          <label>Value</label>
          <input type="number" defaultValue="0" />
        </div>

        <div className="form-group">
          <label>Currency</label>
          <div className="radio-group">
            <input type="radio" name="currency" defaultChecked /> NGN
            <input type="radio" name="currency" /> USD
          </div>
        </div>

        <div className="form-group">
          <label>Fee Frequency</label>
          <div className="radio-group">
            <input type="radio" name="frequency" /> One Off
            <input type="radio" name="frequency" /> Monthly
          </div>
        </div>

        <div className="form-group">
          <label>Fee Impact</label>
          <div className="radio-group">
            <input type="radio" name="impact" /> Issuance
            <input type="radio" name="impact" /> Pin Reissue
          </div>
        </div>

        <div className="form-group">
          <label>Account Pad</label>
          <div className="radio-group">
            <input type="radio" name="pad" defaultChecked /> None
            <input type="radio" name="pad" /> Branch Code Prefix
            <input type="radio" name="pad" /> Branch Code Suffix
          </div>
        </div>

        <div className="form-group">
          <label>Account</label>
          <input type="text" />
        </div>

        <button className="add-fee-btn">Add Fee</button>
      </div>
    </div>
  );
};

export default AddFeeModal;
