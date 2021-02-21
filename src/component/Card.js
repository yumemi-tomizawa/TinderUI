import React from 'react';

export default function Card(props) {
	const { nickname, age, url, detail } = props;
	return (
		<div className='card__container'>
			<div className='card__triangle' />
			<input type='checkbox' className='toggler' />
			<div className='card'>
				<div className='card__front' style={{ backgroundImage: `url(${url})` }}>
					<h2 className='card__name-age'>
						{nickname}, {age}
					</h2>
				</div>
				<div className='card__back'>
					<div>
						<div>
							Nickname: <b>{nickname}</b>
						</div>
						<div>
							Age: <b>{age}</b>
						</div>
						<div>
							Job: <b>{detail.job}</b>
						</div>
						<dl>
							<dt>Favorite:</dt>
							<dd>
								- <b>{detail.favorite[0]}</b>
							</dd>
							<dd>
								- <b>{detail.favorite[1]}</b>
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
