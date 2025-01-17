import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Auth.jsx";
import Register from "./Register.jsx";
import Home from "./Home.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import "leaflet/dist/leaflet.css";
import MyMap from "./Mymap.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <MyMap />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
