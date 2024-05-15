import { FC } from "react";
import { LikeIcon } from "../../../../../assets/reactIcons/icons";
import { ButtonProps } from "../../../../../models/types";

export const LikeButton: FC<ButtonProps> = ({classList = '', size = '16'}) => {
	return (
		<button className={`like-btn ${classList}`}>
			<LikeIcon size={size} style={{ color: 'blue', fill: 'blue' }} />
		</button>
	)
};