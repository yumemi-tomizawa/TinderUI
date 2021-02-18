import { useEffect } from 'react';
import Phone from './Phone';
import '../css/app.css';

function App() {
	useEffect(() => {
		document.title = 'Tinder UI';
	}, []);
	return <Phone />;
}
export default App;
