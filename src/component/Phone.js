import React, { useState, useEffect } from 'react';
import TinderCards from './TinderCards';
import Button from './Button';

export default function Phone() {
	// This keeps track of swipe direction.
	const [swipeDirection, setSwipeDirection] = useState('');
	// This data will be passed to <TinderCards> Component.
	const [people, setPeople] = useState([]);

	useEffect(() => {
		// This is Pixabay API
		const api = '19800860-fd81fde52b5686725fdcf6309',
			keyword = 'model+face',
			num_photo = 4;
		fetch(
			`https://pixabay.com/api/?key=${api}&q=${keyword}&image_type=photo&page=9&per_page=${num_photo}`
		)
			.then((pictures) => pictures.json())
			.then((pictures) => {
				pictures.hits.forEach((picture, index) => {
					const newPerson = { ...profiles[index], url: picture.previewURL };
					profiles[index] = newPerson;
				});
				setPeople(profiles);
			});
	}, []);

	function handleDelete(direction) {
		// If direction is not same, update swipe direction and rerender DOM then className of CSSTransition in TinderCards.js will be updated so that card will be swiped based on user input.
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
		<>
			{people.length !== 0 && (
				<div className='phone'>
					<TinderCards swipeDirection={swipeDirection} people={people} />
					<Button handleDelete={handleDelete} />
				</div>
			)}
		</>
	);
}

const profiles = [
	{
		nickname: 'Sara',
		age: 18,
		url: '',
	},
	{
		nickname: 'Yui',
		age: 29,
		url: '',
	},
	{
		nickname: 'Vennesa',
		age: 20,
		url: '',
	},
	{
		nickname: 'Karen',
		age: 24,
		url: '',
	},
];
