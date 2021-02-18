import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

export default function TinderCards({ people }) {
	return (
		<div className='tinderCards__container'>
			{people.map((person) => (
				<Card key={uuidv4()} {...person} />
			))}
		</div>
	);
}
