import React from 'react';

export default function Card(props) {
	const { nickname, age, url } = props;
	return (
		<div className='card' style={{ backgroundImage: `url(${url})` }}>
			<h2 className='card__name-age'>
				{nickname}, {age}
			</h2>
		</div>
	);
}
