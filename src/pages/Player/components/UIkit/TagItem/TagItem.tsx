import { FC } from "react";

interface TagItemProps {
	index: number;
	tag: string
}

export const TagItem: FC<TagItemProps> = ({index, tag}) => {
	return (
		<li className="tag-list__item" key={index}>
			<button className="tag-list__link">{tag}</button>
		</li>
	)
};