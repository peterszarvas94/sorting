import { HeightsProvider } from './context/HeightsContext';
import Welcome from './components/Welcome';
import AlgorithmPicker from './components/AlgorithmPicker';
import SortButton from './components/SortButton';
import RandomizeButton  from './components/RandomizeButton';
import VisualViewer from './components/VisualViewer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
	return (
		<>
				<HeightsProvider>
					<Welcome />
					<AlgorithmPicker />
					<SortButton />
					<RandomizeButton />
					<VisualViewer />
				</HeightsProvider>
		</>
	);
}

export default App;