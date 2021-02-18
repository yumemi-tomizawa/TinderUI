import React, { useState } from 'react';
import TinderCards from './TinderCards';

export default function Phone() {
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

	return (
		<div className='phone'>
			<TinderCards people={people} />
			{/* Button Component */}
		</div>
	);
}
