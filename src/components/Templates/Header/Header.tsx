import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth/useAuth";
import { Profile } from "./components/Profile";
import "./style.scss";

export const Header = () => {
  const { onLogout } = useAuth();

  return (
    <header className="header container">
      <h1 className="header__logo">header</h1>
			<ul className="menu">
				<li>
					<Link to={'/player'}>Player</Link>
				</li>
			</ul>
      <Profile onLogout={onLogout} />
    </header>
  );
};
