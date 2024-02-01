let buttons = document.querySelectorAll("button");
let displayRow1 = document.querySelector("#display-row1");
let displayRow2 = document.querySelector("#display-row2");

for (let i = 0, len = buttons.length; i < len; i++) {
    buttons[i].addEventListener("click", (e) => {
        console.log(e.target.innerText);
        let btnClicked = e.target.innerText;
        if (btnClicked === "AC") {
            displayRow1.innerHTML = "";
            displayRow2.innerHTML = "";
        } else if (btnClicked === "=") {
            let answer = eval(displayRow1.innerHTML);
            displayRow1.innerHTML += "=";
            displayRow2.innerHTML = answer;
        } else {
            displayRow2.innerHTML = "";
            displayRow1.innerHTML += e.target.innerText;
        }
    });
}
