const OrderedList = ({ animals }) => {
	/* 
		map är en funktion som tar emot en funktion
		map loopar igenom hela arrayen animals
		och på varje varv i loopen körs funktionen
		animal är då det element vi är på i arrayen i loopen
	*/

	return (
		<>
			<h2>Animals from animals.json</h2>
			<ol>
				{animals.map((animal) => {
					return <li>{animal}</li>;
				})}
			</ol>
		</>
	);
};

export default OrderedList;
