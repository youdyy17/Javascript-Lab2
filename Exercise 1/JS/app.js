//q2
let item3 = document.getElementById('container1').lastElementChild;
let container2 = document.getElementById('container2');
container2.appendChild(item3);
//q3 Write the code in the JS file to remove item 4
let item4 = document.getElementById('container2').children[0];
item4.remove();
//q4 create an item 10 and to add it to the container 3
let item10 = document.createElement('p');
item10.innerText = '10';
item10.classList.add('item'); // Add this line to apply the CSS class
let container3 = document.getElementById('container3');
container3.appendChild(item10);

//q5 Write the code in the JS file to display all items located in a blue container in red text
let blueContainer = document.getElementsByClassName('containerBlue');
for (let i = 0; i < blueContainer.length; i++) {
    blueContainer[i].style.color = 'red';
}



