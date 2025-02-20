import { useState } from "react";
import { Link } from "react-router-dom";
import SuccessPopup from "../components/SuccessPopup";
import DispatchPopup from "../components/DispatchPopup";

const RequestDetails = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupDispatch, setshowPopupDispatch] = useState(false);
  

  const handleDownload = () => {
    // Simulate download action (replace with actual logic if needed)
    console.log("Downloading production file...");
    setShowPopup(true);
  };

  const [status, setStatus] = useState("Pending");
  // const [showPopup, setShowPopup] = useState(false);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleDispatch = () => {
    setshowPopupDispatch(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setshowPopupDispatch(false);
  };

  return (
    <div className="request-details-container">
      <h1>Request Details</h1>
      <p className="sub-heading">
        Perform predetermined actions on card requests here.
      </p>

      <div className="card-details">
        <h2>Card Request Details</h2>
        <div className="details-grid">
          <div className="detail-item">
            <label>Branch Name</label>
            <input type="text" value="Corporate" readOnly />
          </div>
          <div className="detail-item">
            <label>Initiator</label>
            <input type="text" value="RootUser" readOnly />
          </div>
          <div className="detail-item">
            <label>Card Type</label>
            <input type="text" value="Classic Debit" readOnly />
          </div>
          <div className="detail-item">
            <label>Card Charges</label>
            <input type="text" value="₦1,500" readOnly />
          </div>
          <div className="detail-item">
            <label>Quantity</label>
            <input type="text" value="10" readOnly />
          </div>
          <div className="detail-item">
            <label>Batch</label>
            <input type="text" value="847264905" readOnly />
          </div>
          <div className="detail-item">
            <label>Date Requested</label>
            <p>11/14/2024 10:27:43</p>
          </div>

          <div className="detail-item">
            <label>Status</label>
            <span className={`status-badge ${status.toLowerCase()}`}>
              {status}
            </span>
          </div>
        </div>

        <div className="actions">
          <Link className="download" onClick={handleDownload}>
            Download for Production
          </Link>
          <Link
            className="in-progress"
            onClick={() => handleStatusChange("In Progress")}
          >
            Mark as In Progress
          </Link>
          <Link className="ready" onClick={() => handleStatusChange("Ready")}>
            Mark as Ready
          </Link>
          <Link className="dispatch" onClick={handleDispatch}>
            Send to Dispatch
          </Link>
          <Link
            className="acknowledge"
            onClick={() => handleStatusChange("Acknowledged")}
          >
            Mark as Acknowledged
          </Link>
        </div>
      </div>

      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}

      {/* Dispatch Pop-Up */}
      {showPopupDispatch && <DispatchPopup onClose={closePopup} />}
    </div>
  );
};

export default RequestDetails;
