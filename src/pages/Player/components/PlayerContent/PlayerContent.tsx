import { FC } from "react";
import { PopularAlbums } from "../Articles/PopularAlbums/PopularAlbums";
import { Recent } from "../Articles/Recent/Recent";
import { Recommend } from "../Articles/Recommend/Recommend";
import { TagsList } from "../TagsList/TagsList";
import { TagsListE } from "../../../../models/enums";
import { SearchField } from "../UIkit/SearchField/SearchField";

export const PlayerContent: FC = () => {
	return (
		<main className="main">
			<section className="section-left">
				<TagsList tagList={Object.values(TagsListE)} />
				<PopularAlbums />
				<Recommend />
				<Recent />
			</section>
			<section className="section-right">
				<SearchField />
			</section>
		</main>
	)
};