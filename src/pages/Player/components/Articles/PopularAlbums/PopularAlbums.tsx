import { FC } from "react";
import image1 from '../../../../../assets/icons/slider1.png';
import image2 from '../../../../../assets/icons/slider2.png';
import image3 from '../../../../../assets/icons/slider3.png';
import { AlbumItem } from "../../UIkit/AlbumItem/AlbumItem";
import { AlbumEntity } from "../../../../../models/types";

const AllAlbums: AlbumEntity[] = [
	{
		id: 1,
		image: image1,
		name: 'Album 1',
		executor: 'Eminem',
		tracks: 12,
		likes: 13000,
	},
	{
		id: 2,
		image: image2,
		name: 'Album 2',
		executor: 'Pink',
		tracks: 10,
		likes: 130,
	},
	{
		id: 3,
		image: image3,
		name: 'Album 3',
		executor: 'Kish',
		tracks: 122,
		likes: 130222,
	},
	{
		id: 4,
		image: image3,
		name: 'Album 3',
		executor: 'Kish',
		tracks: 122,
		likes: 130222,
	},
	{
		id: 5,
		image: image3,
		name: 'Album 3',
		executor: 'Kish',
		tracks: 122,
		likes: 130222,
	}
]

export const PopularAlbums: FC = () => {
	return (
		<article className="article">
			<h2>Popular Albums</h2>
			<div className="article-container">
				<ul className="albums-list">
					{AllAlbums.map(album => (
						<AlbumItem album={album} />
					))}
				</ul>
			</div>
		</article>
	);
};