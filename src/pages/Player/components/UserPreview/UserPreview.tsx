import { FC } from 'react';
import avatar from '../../../../assets/icons/Avatar.png';

export const UserPreview: FC = () => {
	return (
		<div className='user-preview'>
			<div className='image-wrapper'>
				<img src={avatar} alt="avatar" />
			</div>
			<p>Prus Egor</p>
			<button>press</button>
		</div>
	)
};