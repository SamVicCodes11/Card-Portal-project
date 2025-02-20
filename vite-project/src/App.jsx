import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import CardProfile from "./CardProfile/CardProfile";
import CreateProfile from "./createprofile/CreateProfile";
import CardRequest from "./cardRequest/CardRequest";
import AppLayout from "./components/AppLayout";
import RequestDetails from "./RequestDetails/RequestDetails";
import Dashboard from "./Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/branches"
            element={<h1 style={{ paddingLeft: "18rem" }}>Branches</h1>}
          />

          <Route
            path="/roles"
            element={<h1 style={{ paddingLeft: "18rem" }}>Roles</h1>}
          />
          <Route
            path="/users"
            element={<h1 style={{ paddingLeft: "18rem" }}>Users</h1>}
          />
          <Route
            path="/card-scheme"
            element={<h1 style={{ paddingLeft: "18rem" }}>Card Scheme</h1>}
          />
          <Route path="/card-profile" element={<CardProfile />} />
          <Route path="/card-request" element={<CardRequest />} />
          <Route
            path="/stock"
            element={<h1 style={{ paddingLeft: "18rem" }}>Stock</h1>}
          />
          <Route
            path="/cards"
            element={<h1 style={{ paddingLeft: "18rem" }}>Cards</h1>}
          />
          <Route
            path="/authorization-list"
            element={
              <h1 style={{ paddingLeft: "18rem" }}>Authorization List</h1>
            }
          />
          <Route
            path="/authorization-queue"
            element={
              <h1 style={{ paddingLeft: "18rem" }}>Authorization Queue</h1>
            }
          />
          <Route
            path="/trail"
            element={<h1 style={{ paddingLeft: "18rem" }}>Trails</h1>}
          />
          <Route
            path="/account"
            element={<h1 style={{ paddingLeft: "18rem" }}>Account</h1>}
          />

          <Route path="/add-profile" element={<CreateProfile />} />

          <Route path="/request-details" element={<RequestDetails />} />

          {/* <Route path="/card-details" element={<h4>Card Details</h4>} /> */}
        </Route>
        {/* <Route index element={<Home />} /> */}

        {/* <Route path="/cardrequest" element={<CardRequest />} /> */}

        {/* <Route path="/createprofile" element={<CreateProfile />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import Branches from "./pages/Branches";
// import Roles from "./pages/Roles";
// import Users from "./pages/Users";
// import CardScheme from "./pages/CardScheme";
// import CardProfile from "./pages/CardProfile";
// import CardRequestPage from "./pages/CardRequestPage";
// import Stock from "./pages/Stock";
// import Cards from "./pages/Cards";
// import AuthorizationList from "./pages/AuthorizationList";
// import AuthorizationQueue from "./pages/AuthorizationQueue";
// import Trail from "./pages/Trail";
// import Account from "./pages/Account";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="app-container" style={{ display: "flex" }}>
//         <Sidebar />
//         <div className="content" style={{ padding: "2rem", flex: 1 }}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/branches" element={<Branches />} />
//             <Route path="/roles" element={<Roles />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/card-scheme" element={<CardScheme />} />
//             <Route path="/card-profile" element={<CardProfile />} />
//             <Route path="/card-request" element={<CardRequestPage />} />
//             <Route path="/stock" element={<Stock />} />
//             <Route path="/cards" element={<Cards />} />
//             <Route path="/authorization-list" element={<AuthorizationList />} />
//             <Route path="/authorization-queue" element={<AuthorizationQueue />} />
//             <Route path="/trail" element={<Trail />} />
//             <Route path="/account" element={<Account />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
