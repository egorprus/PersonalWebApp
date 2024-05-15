import { Link } from "react-router-dom";

export const InactiveProfile = () => {
  return (
    <>
      <Link className="profile__link" to={"/auth"}>
        Sign in
      </Link>
      <Link className="profile__link" to={"/registration"}>
        Sign up
      </Link>
    </>
  );
};
