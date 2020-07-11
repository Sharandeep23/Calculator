const screen = document.getElementById("result");
let buffer = "0";

document.querySelector(".calculator-grid").addEventListener("click", (e) => {
    handleClick(e.target.textContent);
});

function handleClick(value) {
    if (!isNaN(value)) {
        handleNumber(value);
    } else {
        handleSymbol(value);
    }
}

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
    rerender(buffer);
}

function handleSymbol(value) {
    switch (value) {
        case "C":
            clear();
            break;
        case "←":
            remove();
            break;
    }
}

function rerender(value) {
    screen.textContent = value;
}

function clear() {
    buffer = "0";
    rerender(buffer);
}

function remove() {
    let bufferArray = buffer.split("");
    bufferArray.pop();
    if (bufferArray.length === 0) {
        bufferArray.push(0);
    }
    buffer = bufferArray.join("");
    rerender(buffer);
}
