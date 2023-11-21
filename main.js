const inputField = document.getElementById('inputField');
const keyboard = document.getElementById('keyboard');
const shiftButton = createButton('Shift');

const keys = [
['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

keys.forEach(row => {
const rowDiv = createDiv('row');

row.forEach(key => {
const button = createButton(key);
button.addEventListener('click', () => {
inputField.value += key;
});
rowDiv.appendChild(button);
});

keyboard.appendChild(rowDiv);
});

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

const backspaceButton = createButton('Backspace');
backspaceButton.addEventListener('click', () => {
inputField.value = inputField.value.slice(0, -1);
});
keyboard.appendChild(backspaceButton);
document.addEventListener('keydown', handleBackspaceKeyDown);
document.addEventListener('keyup', handleBackspaceKeyUp);

shiftButton.addEventListener('click', handleShiftButtonClick);
keyboard.appendChild(shiftButton);
document.addEventListener('keydown', handleShiftKeyDown);
document.addEventListener('keyup', handleShiftKeyUp);

function createButton(text) {
const button = document.createElement('button');
button.className = 'button';
button.textContent = text;
return button;
}

function createDiv(className) {
const div = document.createElement('div');
div.className = className;
return div;
}

function handleKeyDown(e) {
const key = e.key;

if (/[a-zA-Z0-9]/.test(key)) {
inputField.value += key;
highlightKey(key);
} else if (key === 'Backspace') {
e.preventDefault();
inputField.value = inputField.value.slice(0, -1);
highlightBackspaceButton();
}
}

function handleKeyUp(e) {
const key = e.key;

if (/[a-zA-Z0-9]/.test(key)) {
removeHighlightKey(key);
} else if (key === 'Backspace') {
removeHighlightBackspaceButton();
}
}

function highlightKey(key) {
const buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i++) {
if (buttons[i].textContent.toLowerCase() === key.toLowerCase()) {
buttons[i].classList.add('active');
break;
}
}
}

function removeHighlightKey(key) {
const buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i++) {
if (buttons[i].textContent.toLowerCase() === key.toLowerCase()) {
buttons[i].classList.remove('active');
break;
}
}
}

function handleBackspaceKeyDown(e) {
const key = e.key;

if (key === 'Backspace') {
e.preventDefault();
highlightBackspaceButton();
inputField.value = inputField.value.slice(0, -1);
}
}

function handleBackspaceKeyUp(e) {
const key = e.key;

if (key === 'Backspace') {
removeHighlightBackspaceButton();
}
}

function highlightBackspaceButton() {
backspaceButton.classList.add('active');
}

function removeHighlightBackspaceButton() {
backspaceButton.classList.remove('active');
}

function handleShiftButtonClick() {

}

function handleShiftKeyDown(e) {
const key = e.key;

if (key === 'Shift') {
highlightShiftButton();
}
}

function handleShiftKeyUp(e) {
const key = e.key;

if (key === 'Shift') {
removeHighlightShiftButton();
}
}

function highlightShiftButton() {
shiftButton.classList.add('active');
}

function removeHighlightShiftButton() {
shiftButton.classList.remove('active');
}





