import DropDown from "./components/DropDown/DropDown";
import WorkerInfoBox from "./components/WorkerInfoBox/WorkerInfoBox";
import OrderedList from "./components/OrderedList/OrderedList";

import workersArray from "./assets/json/bob_simple_10.json";

function App() {
	return (
		<main>
			<h1>bob-builder-demo</h1>
			<DropDown data={workersArray} />
			<WorkerInfoBox oneWorker={workersArray[0]} />
		</main>
	);
}

export default App;
