import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts";
import { Loading } from "../components";

const PrivateRoute = ({children}) => {

  const { isLoggedIn, loading } = useAuth();

  if (loading) return <Loading />;

  if (!isLoggedIn) return <Navigate to="/" />

  return children;
};

export default PrivateRoute;
