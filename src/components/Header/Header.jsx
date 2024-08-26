import { useSelector } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
import s from "./Header.module.css";
import { selectIsLogedIn } from "reduxStore/auth/selectors";
import { UserMenu, AuthNav, Container } from "components";

export const Header = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <Navigation />
          {isLogedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </Container>
    </header>
  );
};
