import fetchRecipes from "./fetchRecipes.js";
import createCard from "./createCard.js";
import createErrorMessage from "./createErrorMessage.js";
import createCleanMessage from "./createCleanMessage.js";

const carrousel = document.getElementById("carrousel");
const boton = document.getElementById("main__button");
const clearButton = document.getElementById("main__button_limpiar");
const input = document.getElementById("main__input");

const onSubmit = async () => {
	const search = input.value.toLowerCase();
	const data = await fetchRecipes(search);
	carrousel.innerHTML = "";
	if (!!data.data.recipes.length) {
		data.data.recipes.forEach((recipe) => {
			const card = createCard(recipe);
			carrousel.append(card);
			carrousel.className = "carrousel overflowd";
		});
	} else {
		const errorMessage = createErrorMessage();
		carrousel.append(errorMessage);
	}
};

const clean = () => {
	input.value = "";
	carrousel.innerHTML = "";
	const cleanMessage = createCleanMessage();
	carrousel.append(cleanMessage);
};

clearButton.onclick = clean;
boton.onclick = onSubmit;
input.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		onSubmit();
	}
});
