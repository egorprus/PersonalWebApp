import { FC } from "react";
import { PlayIcon } from "../../../../../assets/reactIcons/icons";
import { ButtonProps } from "../../../../../models/types";

export const PlayButton: FC<ButtonProps> = ({classList = '', size = '16'}) => {
	return (
		<button className={`play-btn ${classList}`} type="button">
			<PlayIcon size={size}/>
		</button>
	)
};