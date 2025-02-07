const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

let clickbutton = document.querySelector('a[type="button"]');
//click on button to display card
clickbutton.addEventListener('click', function createCard() {
    const cardContainer = document.getElementById("card-container");
  
    // Create the card element
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundColor = randomColor();
  
    // Add content to the card
    const description = document.createElement("p");
    description.textContent = "Hello";
  
    const footer = document.createElement("div");
    footer.className = "card-footer";
  
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Card";
    removeButton.onclick = () => card.remove();
  
    footer.appendChild(removeButton);
    card.appendChild(description);
    card.appendChild(footer);
  
    // Add the card to the container
    cardContainer.appendChild(card);
  
});
