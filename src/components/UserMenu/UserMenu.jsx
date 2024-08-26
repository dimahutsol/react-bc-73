import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "reduxStore/auth/selectors";
import { logout } from "reduxStore/auth/operation";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={handleClick} type="button">
        LogOut
      </button>
    </div>
  );
};
