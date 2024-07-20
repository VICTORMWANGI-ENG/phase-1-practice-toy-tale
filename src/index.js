/** @format */

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
	const addBtn = document.querySelector("#new-toy-btn");
	const toyFormContainer = document.querySelector(".container");
	addBtn.addEventListener("click", () => {
		// hide & seek with the form
		addToy = !addToy;
		if (addToy) {
			toyFormContainer.style.display = "block";
		} else {
			toyFormContainer.style.display = "none";
		}
	});
});
fetch("http://localhost:3000/toys")
	.then((res) => res.json())
	.then((data) => {
		const toys = data;
		displayToy(toys);
	});

function displayToy(toys) {
	toys.forEach((toy) => {
		let card = document.createElement("div");
		card.className = "card";
		let name = document.createElement("h2");
		let image = document.createElement("img");
		image.className = "toy-avatar";
		let likes = document.createElement("p");
		let button = document.createElement("button");
		button.className = "likeBtn";
		name.textContent = toy.name;
		image.src = toy.image;
		likes.textContent = `Likes: ${toy.likes}`;
		button.textContent = "Like";
		//
		let toyContainer = document.querySelector("#toy-collection");
		//
		card.appendChild(name);
		card.appendChild(image);
		card.appendChild(likes);
		card.appendChild(button);
		toyContainer.appendChild(card);
		////

		let likeBtn = document.querySelector(".likeBtn");
		likeBtn.addEventListener("click", () => {
			likes.textContent = `Likes: ${(toy.likes += 1)}`;
		});
  });
 
}
