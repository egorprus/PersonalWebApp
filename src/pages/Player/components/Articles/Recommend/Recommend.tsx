import { FC } from "react";
import image from '../../../../../assets/icons/slider4.png';
import { LikeButton, PlayButton, UploadButton } from "../../UIkit/Buttons";
import { TagsListE } from "../../../../../models/enums";
import { TagsList } from "../../TagsList/TagsList";

const Playlists = [
	{
		image: image,
		name: 'New Music Friday',
		description: 'Listen to the fresh new music from Pakistan',
		duration: '03:24:34',
		likes: 134232323,
		tracks: 123,
		tags: [
			TagsListE.classicFusion,
			TagsListE.audioBooks,
			TagsListE.podcasts,
		]
	}
]
export const Recommend: FC = () => {
	return (
		<article className="article">
			<h2>Recommend</h2>
			{Playlists.map(playlist => (
				<div className="playlist" key={playlist.image}>
					<div className="playlist__image">
						<img src={playlist.image} alt="dfasdas" />
					</div>
					<div className="playlist__content">
						<p>
							Playlist
						</p>
						<h3>{playlist.name}</h3>
						<p>{playlist.description}</p>

						<div className="playlist__statistic">
							<span>{playlist.duration}</span>
							<span>{playlist.likes} likes</span>
							<span>{playlist.tracks} tracks</span>
						</div>
						<TagsList tagList={playlist.tags} />
						<div className="playlist__controller">
							<LikeButton size="24" />
							<UploadButton size="24" />
							<PlayButton size={'24'} />
						</div>
					</div>
				</div>
			))}
		</article>
	);
};