import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';

export default function Button({ handleDelete }) {
	return (
		<div className='button'>
			<IconButton
				className='button__dislike'
				onClick={() => handleDelete('left')}
			>
				<CloseIcon fontSize='large' />
			</IconButton>
			<IconButton
				className='button__like'
				onClick={() => handleDelete('right')}
			>
				<FavoriteIcon fontSize='large' />
			</IconButton>
		</div>
	);
}
