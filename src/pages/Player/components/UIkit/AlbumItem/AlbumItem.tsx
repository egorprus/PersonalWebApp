import { FC } from "react";
import { LikeButton, PlayButton } from "../Buttons";
import { AlbumEntity } from "../../../../../models/types";

interface AlbumItemProps {
	album: AlbumEntity;
}

export const AlbumItem: FC<AlbumItemProps> = ({album}) => {
	return (
		<li key={album.id}>
			<div className="album">
				<div className="album__image">
					<img src={album.image} alt="sdfdfdsfds" />
				</div>
				<div className="album__content">
					<div className="album-row">
						<h3>
							{album.name}
							<p>{album.executor}</p>
						</h3>
						<LikeButton classList="album-like"/>
					</div>
					<div className="album-row">
						<p>{album.tracks} tracks</p>
						<p>{album.likes} likes</p>
						<PlayButton classList="album-play" />
					</div>
				</div>
			</div>
		</li>
	)
};