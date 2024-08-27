import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogedIn } from "reduxStore/auth/selectors";
import { selectIsRefreshing } from "../../reduxStore/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLogedIn = useSelector(selectIsLogedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLogedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
