import { FC } from "react";
import { TrackEntity } from "../../../../../models/types";
import { LikeButton } from "../Buttons";

interface TrackItemProps {
	track: TrackEntity,
	index: number,
}

export const TrackItem: FC<TrackItemProps> = ({track, index}) => {
	return (
		<li key={track.id}>
			<div className="track">
				<div className="track__main-info">
					<span>{index + 1}</span>
					<div className="track__image">
						<img src={track.image} />
					</div>
					<h3>
						{track.name}
						<p>{track.executor}</p>
					</h3>
				</div>
				<div>
					<h3>
						{track.album}
						<p>{track.year}</p>
					</h3>
				</div>
				<span>{track.duration}</span>
				<LikeButton size="24" />
			</div>
		</li>
	)
};