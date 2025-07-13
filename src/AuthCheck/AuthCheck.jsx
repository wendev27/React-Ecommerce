import { useLocation, Navigate } from "react-router-dom";

function AuthCheck({ children }) {
  const isAuthenticate = true; // <-- consistent variable name
  const location = useLocation();

  if (!isAuthenticate) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}

export default AuthCheck;
