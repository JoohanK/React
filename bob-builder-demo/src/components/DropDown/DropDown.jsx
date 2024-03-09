import React, { useState } from "react";

const DropDown = ({ data, onPersonSelect }) => {
	
	const [selectedPerson, setSelectedPerson] = useState(null);

	const handleChange = (e) => {
		console.log(data);
	};

	const firstNames = data.map(person => person.firstname);

	return (
		<select onChange={handleChange}>
			{firstNames.map((name, index) => (
				<option key={index} value={name}>{name}</option>
			))}
		</select>
	);
};

export default DropDown;
