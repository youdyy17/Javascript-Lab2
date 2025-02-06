// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// set the body background color with this color
let body = document.querySelector('body');
body.style.backgroundColor = getRandomHexColor();
// click the button to change the background color
let button = document.querySelector('button');
button.addEventListener('click', function () {
    body.style.backgroundColor = getRandomHexColor();
    colorLabel.style.color = body.style.backgroundColor; // Update text color to match background
});
// change the color text same as the background color to match the contrast
let colorLabel = document.querySelector('result-color');
colorLabel.style.color = body.style.backgroundColor; // Initial text color to match background

