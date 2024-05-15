import home from "../../../../assets/icons/home.svg";
import { FC } from "react";
import { NavigationEntity } from "../../../../models/types";
import { NavigationItem } from "../UIkit/NavigationItem/NavigationItem";

const navigationList: NavigationEntity[] = [
  {
		id: 10,
    link: "/",
    text: "Home",
    icon: home,
  },
  {
		id: 11,
    link: "/",
    text: "Search",
    icon: home,
  },
  {
		id: 12,
    link: "/",
    text: "Playlist",
    icon: home,
  },
];

export const Navigation: FC = () => {
  return (
    <ul className="navigation">
      {navigationList.map((navigationItem) => (
        <NavigationItem navigationItem={navigationItem} />
      ))}
    </ul>
  );
};
