import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Loader, PrivateRoute, RestrictedRoute } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./reduxStore/auth/operation";
import { selectIsRefreshing } from "./reduxStore/auth/selectors";
const Props = lazy(() => import("./pages/Props/Props"));
const Points = lazy(() => import("./pages/Points/Points"));
const Quize = lazy(() => import("./pages/Quize/Quize"));
const Todos = lazy(() => import("./pages/Todos/Todos"));
const Photos = lazy(() => import("./pages/Photos/Photos"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Countries = lazy(() => import("./pages/Countries/Countries"));
const SearchCountries = lazy(() =>
  import("./pages/SearchCountries/SearchCounties")
);
const CountryInfo = lazy(() => import("./pages/CountryInfo/CountryInfo"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Header />
      <Suspense fallback={<h2>Loading</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/photos"
            element={
              <PrivateRoute component={<Photos />} redirectTo="/login" />
            }
          />
          <Route
            path="/quize"
            element={<PrivateRoute component={<Quize />} redirectTo="/login" />}
          />
          <Route
            path="/points"
            element={
              <PrivateRoute component={<Points />} redirectTo="/login" />
            }
          />
          <Route
            path="/props"
            element={<PrivateRoute component={<Props />} redirectTo="/login" />}
          />
          <Route
            path="/todos"
            element={<PrivateRoute component={<Todos />} redirectTo="/login" />}
          />
          <Route
            path="/countries"
            element={
              <PrivateRoute component={<Countries />} redirectTo="/login" />
            }
          />
          <Route
            path="/searchCountries"
            element={
              <PrivateRoute
                component={<SearchCountries />}
                redirectTo="/login"
              />
            }
          />
          <Route
            path="/countries/:id"
            element={
              <PrivateRoute component={<CountryInfo />} redirectTo="/login" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/todos" />
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
