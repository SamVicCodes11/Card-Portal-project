import React, { useState } from "react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CardProfile = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const cardProfiles = [
    {
      name: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "50611234",
      dateCreated: "11/10/2024 23:21:03",
    },
    {
      name: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "50611234",
      dateCreated: "11/10/2024 23:21:03",
    },
    {
      name: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "50611234",
      dateCreated: "11/10/2024 23:21:03",
    },
  ];

  const filteredProfiles = cardProfiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-profile-page">
      <header className="page-header">
        <h1>Card Profile</h1>
        <p>Create, view and edit card profiles here.</p>
      </header>

      <div className="action-bar">
        <input
          type="text"
          placeholder="🔍 Search by card name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <Link to="/add-profile" className="add-profile-btn">
          <FaPlus /> Add Profile
        </Link>
      </div>

      <table className="card-table">
        <thead>
          <tr>
            <th>Card Name</th>
            <th>Currency</th>
            <th>Expiration</th>
            <th>Bin Prefix</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProfiles.map((profile, index) => (
            <tr key={index}>
              <td>{profile.name}</td>
              <td>{profile.currency}</td>
              <td>{profile.expiration}</td>
              <td>{profile.binPrefix}</td>
              <td>{profile.dateCreated}</td>
              <td className="action-icons">
                <FaTrash className="delete-icon" />
                <FaEdit className="edit-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardProfile;
