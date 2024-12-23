import { Navigate } from "react-router-dom";
import { auth } from "../backend/firebase";

function ProtectedRoute({ children }) {
  const user = auth.currentUser;
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;