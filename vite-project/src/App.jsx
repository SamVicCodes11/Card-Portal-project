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

        
        </Route>

      </Routes>
    </Router>
  );
};

export default App;



