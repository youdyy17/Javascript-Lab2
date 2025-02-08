

let count = 3;

function checkCode() {
    const inputCode = document.getElementById('passwordInput').value;
    const password = '123';
    if (inputCode == password) {
        //show won view
        document.getElementById('wonView').style.display = 'block';
        document.getElementById('passwordView').style.display = 'none';
    }
    else {
        document.getElementById('lostView').style.display = 'block';
        document.getElementById('passwordView').style.display = 'none';
        document.getElementById('tryAgainButton').addEventListener('click', tryAgain);
        count--;
        document.getElementById('instructionLabel').innerHTML = `Enter your code (You can try ${count} times only !)`;
        if (count == 0) {
            document.getElementById('tryAgainButton').remove();
        }

    }
};
function tryAgain() {
    document.getElementById('passwordView').style.display = 'block';
    document.getElementById('lostView').style.display = 'none';
    document.getElementById('wonView').style.display = 'none';
    document.getElementById('passwordInput').value = '';
}



document.getElementById('checkButton').addEventListener('click', checkCode);


