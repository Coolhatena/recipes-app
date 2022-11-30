'use strict';

const fetchRecipes = async (recipe) => {
	const apiKey = 'c1f443de-a08e-4c1d-b08b-d0e08848783a'
	const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}&key=${apiKey}`);
	try {
		const data = await response.json();
		return data;
	} catch (error) {
		return undefined;
	}
};

export default fetchRecipes;