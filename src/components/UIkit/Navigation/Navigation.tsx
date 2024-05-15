import { Link } from "react-router-dom";
import { NavItem } from "../../../models/types";

interface Props {
	navigationList: NavItem[]
}
export const Navigation = ({ navigationList }: Props) => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {navigationList.map((item, index) => (
          <li className="nav-list__item" key={index}>
            <Link className="nav-list__btn" replace to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
