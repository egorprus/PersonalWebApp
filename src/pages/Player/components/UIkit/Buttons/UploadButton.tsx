import { FC } from "react";
import { UploadIcon } from "../../../../../assets/reactIcons/icons";
import { ButtonProps } from "../../../../../models/types";

export const UploadButton: FC<ButtonProps> = ({classList = '', size = '16'}) => {
	return (
		<button className={`upload-btn ${classList}`}>
			<UploadIcon size={size} />
		</button>
	)
};