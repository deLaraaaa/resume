const text = "__*W1P...!!!";
const delay = 150; // Delay in milliseconds
let index = 0;

function typeText() {
    const element = document.getElementById("typewriter");
    element.innerHTML = text.slice(0, index);

    index++;

    if (index <= text.length) {
        setTimeout(typeText, delay);
    } else {
        index = 0;
        setTimeout(typeText, delay);
    }
}

typeText();