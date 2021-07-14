import { ResetedProvider }  from './context/ResetedContext';
import { HeightsProvider } from './context/HeightsContext';
import AlgorithmPicker from './components/AlgorithmPicker';
import ResetButton  from './components/ResetButton';
import VisualViewer from './components/VisualViewer';

import './App.css';

function App() {
	return (
		<>
			<ResetedProvider>
				<HeightsProvider>
					<AlgorithmPicker />
					<ResetButton />
					<VisualViewer />
				</HeightsProvider>
			</ResetedProvider>
			
		</>
	);
}

export default App;
