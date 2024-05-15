import { FC } from "react";
import { Navigation } from "../Navigation/Navigation";
import { UserPreview } from "../UserPreview/UserPreview";

export const Sidebar: FC = () => {
	return (
		<aside className="sidebar">
			<Navigation />
			<UserPreview />
		</aside>
	)
};