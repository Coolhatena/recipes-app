"use strict";

const createErrorMessage = () => {
	const messageContainer = document.createElement("div");
	messageContainer.id = "default_content_message";
	messageContainer.className = "default_content_message";
	const h2 = document.createElement("h2");
	h2.textContent = "No se encontraron recetas :(";
	const p = document.createElement("p");
	p.textContent = "¡Intenta otra busqueda!";
	messageContainer.append(h2);
	messageContainer.append(p);
	return messageContainer;
};

export default createErrorMessage;
