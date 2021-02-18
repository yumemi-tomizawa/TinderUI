import React, { useState } from 'react';
import TinderCards from './TinderCards';
import Button from './Button';

export default function Phone() {
	// This keeps track of swipe direction.
	const [swipeDirection, setSwipeDirection] = useState('');
	// This data will be passed to <TinderCards> Component.
	const [people, setPeople] = useState([
		{
			nickname: 'Sara',
			age: 18,
			url:
				'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		},
		{
			nickname: 'Yui',
			age: 29,
			url:
				'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		},
		{
			nickname: 'Vennesa',
			age: 20,
			url:
				'https://images.unsplash.com/photo-1504730030853-eff311f57d3c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		},
		{
			nickname: 'Karen',
			age: 24,
			url:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		},
	]);

	function handleDelete(direction) {
		// If direction is not same, update swipe direction and rerender DOM then className of CSSTransition in TinderCards.js will be updated so that card will be swiped based on user input.
		// if (direction !== swipeDirection) {
		// }
		setSwipeDirection(direction);
		// Remove the top of card.
		const newPeople = people.filter(
			(person, index) => index != people.length - 1
		);
		// Give React some time to rerender DOM to update className of CSSTransition. Otherwise, card won't be swiped correct direction.
		// The reason why I reset swipeDirection is that if swipeDirection function is changed left to right in above setSwipeDirection(), then React will rerender the TinderCards component which means the component will be unmounted. Therefore, it will trigger exit animations. If you set swipeDirection to anything except left and right will prevent it to be happened because there is no such a className animation in TinderCards.css.
		setTimeout(() => {
			setPeople(newPeople);
			setSwipeDirection('');
		}, 500);
	}

	return (
		<div className='phone'>
			<TinderCards swipeDirection={swipeDirection} people={people} />
			<Button handleDelete={handleDelete} />
		</div>
	);
}
