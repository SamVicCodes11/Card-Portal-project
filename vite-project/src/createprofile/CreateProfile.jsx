import { useState } from "react";
import AddFeePopup from "../components/AddFeePopUp";

const CreateProfile = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="create-profile-container">
      <div className="breadcrumb">
        <span>&lt; Back</span> &nbsp; &gt; Card Profile &nbsp; &gt; Create
        Profile
      </div>

      <h1>Create Profile</h1>
      <p>Fill in profile details and add card fee.</p>

      <form className="profile-form">
        <fieldset className="profile-details">
          <legend>Profile Details</legend>
          <div className="form-grid">
            <div className="form-group">
              <label>Card Name*</label>
              <input type="text" placeholder="Enter card name" />
            </div>

            <div className="form-group">
              <label>Bin Prefix*</label>
              <input type="text" placeholder="00000000" />
            </div>

            <div className="form-group">
              <label>Card Scheme*</label>
              <select>
                <option value="">Select Card Scheme</option>
                <option value="Verve">Verve</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Visa">Visa</option>
              </select>
            </div>

            <div className="form-group">
              <label>Expiration*</label>
              <input type="number" placeholder="0" />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input type="text" placeholder="Add description" />
            </div>

            <div className="form-group">
              <label>Currency*</label>
              <select>
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div className="form-group">
              <label>Branch Blacklist</label>
              <select>
                <option value="">Select Branch</option>
                <option value="Head Office">Head Office</option>
                <option value="Branch A">Branch A</option>
                <option value="Branch B">Branch B</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset className="fees-section">
          <legend>Fees</legend>
          <button type="button" className="add-fee-btn" onClick={togglePopup}>
            + Add Fee
          </button>

          <table className="fee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Frequency</th>
                <th>Currency</th>
                <th>Time</th>
                <th>Account Pad</th>
                <th>Account</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" placeholder="Fee Name" />
                </td>
                <td>
                  <input type="text" placeholder="Fee Value" />
                </td>
                <td>
                  <input type="text" placeholder="Frequency" />
                </td>
                <td>
                  <select>
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                  </select>
                </td>
                <td>
                  <input type="text" placeholder="Time" />
                </td>
                <td>
                  <input type="text" placeholder="Account Pad" />
                </td>
                <td>
                  <input type="text" placeholder="Account" />
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>

        <button className="create-profile-btn">Create Profile</button>
      </form>

      {/* Popup */}
      {showPopup && <AddFeePopup onClose={togglePopup} />}
    </div>
  );
};

export default CreateProfile;
