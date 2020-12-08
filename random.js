const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor()
    document.body.style.background = newColor;
    h1.innerText = newColor;
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const totall = r + g + b;
    if (totall < 250) {
        h1.style.color = "white";
    } else {
        h1.style.color = "black";
    }
    return `rgb(${r}, ${g}, ${b})`;
}




/* rgb(200, 123, 34) */



/* const headTag = document.querySelector('#CaseA h1');
const button = document.querySelector('#CaseA button');

button.addEventListener('click', () => {
    const colorChosen = makeRandomColor();
    document.body.style.backgroundColor = colorChosen;
    headTag.innerText = colorChosen;
    if (total <= 255) {
        headTag.style.color = 'white';
    }
    else {
        headTag.style.color = 'black';
    }
});

const makeRandomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    total = red + green + blue;
    return `rgb(${red},${green},${blue})`;
} */