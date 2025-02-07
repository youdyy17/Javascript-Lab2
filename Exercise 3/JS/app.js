let clickbutton = document.querySelector('a[type="button"]');
//click on button to display card
clickbutton.addEventListener('click', function() {
    // Create card element
    let card = document.createElement('div');
    card.className = 'card';
    card.style.display = 'block';

    // Create description paragraph
    let description = document.createElement('p');
    description.textContent = 'Description';
    card.appendChild(description);

    // Create card footer
    let cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    // Create remove button
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Card';
    removeButton.addEventListener('click', function() {
        card.style.display = 'none';
        clickbutton.style.display = 'block';
    });
    cardFooter.appendChild(removeButton);

    card.appendChild(cardFooter);
    document.body.appendChild(card);

    //hide button
    clickbutton.style.display = 'none';
});
