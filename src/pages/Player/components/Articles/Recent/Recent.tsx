import { FC } from "react";
import track1 from '../../../../../assets/icons/track1.png';
import { TrackEntity } from "../../../../../models/types";
import { TrackItem } from "../../UIkit/TrackItem/TrackItem";

const TracksList: TrackEntity[] = [
	{
		id: 100,
		image: track1,
		name: 'Eternal Echoes',
		executor: 'Sarah Melody',
		album: 'Serenity Symphony',
		year: 2022,
		duration: '04:32'
	},
	{
		id: 101,
		image: track1,
		name: 'Eternal Echoes',
		executor: 'Sarah Melody',
		album: 'Serenity Symphony',
		year: 2022,
		duration: '04:32'
	},
	{
		id: 102,
		image: track1,
		name: 'Eternal Echoes',
		executor: 'Sarah Melody',
		album: 'Serenity Symphony',
		year: 2022,
		duration: '04:32'
	}
];

export const Recent: FC = () => {
	return (
		<article className="article">
			<h2>Recent</h2>
			<ul className="track-list">
				{TracksList.map((track, index) => (
					<TrackItem track={track} index={index} />
				))}
			</ul>
		</article>
	);
};