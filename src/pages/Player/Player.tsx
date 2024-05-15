import { FC } from "react";
import { PlayerContent } from "./components/PlayerContent/PlayerContent";
import { Sidebar } from "./components/Sidebar/Sidebar";
import './styles/style.scss';

export const Player: FC = () => {
	return (
		<div className="player-wrapper">
			<div className="player-container">
				<Sidebar />
				<PlayerContent />
			</div>
		</div>
	)
};