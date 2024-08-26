import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components";
import { useDispatch } from "react-redux";
import { refreshUser } from "./reduxStore/auth/operation";
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

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/quize" element={<Quize />} />
          <Route path="/points" element={<Points />} />
          <Route path="/props" element={<Props />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/searchCountries" element={<SearchCountries />} />
          <Route path="/countries/:id" element={<CountryInfo />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
