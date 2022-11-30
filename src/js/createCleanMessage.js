"use strict";

const createCleanMessage = () => {
	const messageContainer = document.createElement("div");
	messageContainer.id = "default_content_message";
	messageContainer.className = "default_content_message";
	const h2 = document.createElement("h2");
	h2.textContent = "¡Limpiado!";
	const p = document.createElement("p");
	p.textContent = "Te invitamos a que sigas buscando recetas";
	messageContainer.append(h2);
	messageContainer.append(p);
	return messageContainer;
};

export default createCleanMessage;
