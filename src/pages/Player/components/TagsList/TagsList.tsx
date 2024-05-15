import { FC } from "react";
import { TagsListE } from "../../../../models/enums";
import { TagItem } from "../UIkit/TagItem/TagItem";

interface TagListProps {
	tagList: TagsListE[];
}

export const TagsList: FC<TagListProps> = ({tagList}) => {
	return (
		<ul className="tag-list">
			{tagList.map((tag, index) => (
				<TagItem tag={tag} index={index} />
			))}
		</ul>
	)
};