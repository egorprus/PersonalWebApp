import { FC } from "react";
import { Link } from "react-router-dom";
import { NavigationEntity } from "../../../../../models/types";

interface NavigationItemProps {
	navigationItem: NavigationEntity
}

export const NavigationItem: FC<NavigationItemProps> = ({navigationItem}) => {
	return (
		<li key={navigationItem.id}>
			<Link className="navigation__link" to={navigationItem.link}>
				<div className="image-wrapper">
					<img src={navigationItem.icon} alt="icon" />
				</div>
				{navigationItem.text}
			</Link>
		</li>
	)
};