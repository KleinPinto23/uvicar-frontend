import { Navigate } from "react-router-dom";
import { UvicarPage } from "../pages/UvicarPage";
 
export const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <UvicarPage /> : <Navigate to="/auth/login" />;
};
