const calculator = document.querySelector(".calculator");
const result = document.querySelector(".result");

// Leveraging Event Bubbling
calculator.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        const sign = e.target.innerText;
        if (
            sign === "×" ||
            sign === "–" ||
            sign === "÷" ||
            sign === "+" ||
            sign === "="
        ) {
            // Calculaton Part
            switch (sign) {
                case "+":
            }
        } else if (sign === "C" || sign === "DEL") {
            // Clearing Part
            if (sign === "C") {
                result.innerText = "0";
            } else {
                const resultArray = result.innerText.split("");
                resultArray.pop();
                result.innerText = resultArray.join("");
            }
        } else {
            // Numbers
            if (result.innerText === "0") {
                result.innerText = sign;
            } else {
                if (result.innerText.length < 16) {
                    result.innerText += sign;
                } else {
                    alert("MAX LENGTH REACHED!");
                }
            }
        }
    }
    e.stopPropagation();
});
