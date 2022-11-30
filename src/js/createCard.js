"use strict";

const createCard = (recipe) => {
	const cardContainer = document.createElement("div");
	cardContainer.className = "card";
	const img = document.createElement("img");
	img.src = recipe.image_url;
	const title = document.createElement("p");
	title.className = "title";
	title.textContent = recipe.title;
	const author = document.createElement("p");
	author.className = "author";
	author.textContent = `Hecho por: ${recipe.publisher}`;

	cardContainer.append(img);
	cardContainer.append(title);
	cardContainer.append(author);
	return cardContainer;
};

export default createCard;
