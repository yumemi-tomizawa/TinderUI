import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function TinderCards({ people, swipeDirection }) {
	useEffect(() => {
		console.log('Mounted');
		return () => {
			console.log('Unmounted!');
		};
	});
	console.log('swipeDirection:', swipeDirection);
	return (
		<div className='tinderCards__container'>
			<TransitionGroup component={null}>
				{people.map((person) => (
					<CSSTransition
						key={uuidv4()}
						timeout={500}
						classNames={swipeDirection}
					>
						<Card {...person} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
}
