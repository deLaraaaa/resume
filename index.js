const text = "__*W1P...!!!";
const delay = 150;
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

function copy(that){
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
}
