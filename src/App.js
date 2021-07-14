import { HeightsProvider } from './context/HeightsContext';
import AlgorithmPicker from './components/AlgorithmPicker';
import SortButton from './components/SortButton';
import ResetButton  from './components/ResetButton';
import VisualViewer from './components/VisualViewer';

import './App.css';

function App() {
	return (
		<>
			<HeightsProvider>
				<AlgorithmPicker />
				<SortButton />
				<ResetButton />
				<VisualViewer />
			</HeightsProvider>			
		</>
	);
}

export default App;