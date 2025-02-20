import { useState } from "react";
import { Link } from 'react-router-dom';

const CardRequest = () => {
  const [search, setSearch] = useState("");




  const cardRequests = [
    { branch: "Cooperate", initiator: "RootUser", quantity: 10, batch: "84729#905", date: "14/4/2024 10:27:43", status: "Ready" },
    { branch: "Cooperate", initiator: "RootUser", quantity: 10, batch: "84729#905", date: "14/4/2024 10:27:43", status: "Ready" },
    { branch: "Cooperate", initiator: "RootUser", quantity: 10, batch: "84729#905", date: "14/4/2024 10:27:43", status: "In Progress" },
    { branch: "Cooperate", initiator: "RootUser", quantity: 10, batch: "84729#905", date: "14/4/2024 10:27:43", status: "Pending" },
    { branch: "Cooperate", initiator: "RootUser", quantity: 10, batch: "84729#905", date: "14/4/2024 10:27:43", status: "Acknowledged" },
  ];

  const filteredRequests = cardRequests.filter(request =>
    request.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card-request-container">
      <h2>Card Request</h2>
      <p>View and attend to card requests here.</p>

      <input
        type="text"
        placeholder="Search by branch"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Branch</th>
            <th>Initiator</th>
            <th>Quantity</th>
            <th>Batch</th>
            <th>Date Requested</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.branch}</td>
              <td>{request.initiator}</td>
              <td>{request.quantity}</td>
              <td>{request.batch}</td>
              <td>{request.date}</td>
              <td>
                <span className={`status ${request.status.toLowerCase().replace(" ", "-")}`}>
                  {request.status}
                </span>
              </td>
              <td>
                <Link to="/request-details" className="view-link">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardRequest;
