import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// This is for swiping card
import TinderCard from 'react-tinder-card';

export default function TinderCards({ people, swipeDirection }) {
	return (
		<div className='tinderCards__container'>
			<h1 className='tinderCards__empty'>Empty</h1>
			<TransitionGroup component={null}>
				{people.map((person) => (
					<CSSTransition
						key={uuidv4()}
						timeout={500}
						classNames={swipeDirection}
					>
						<TinderCard
							className='tinderCards__swipe'
							key={uuidv4()}
							preventSwipe={['up', 'down']}
						>
							<Card {...person} />
						</TinderCard>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
}
