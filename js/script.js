let buttons = document.querySelectorAll("button");
let displayRow1 = document.querySelector("#display-row1");
let displayRow2 = document.querySelector("#display-row2");

// evaluate function replaces '%' symbole with '/100' in the expression because
// eval() function does not recognise % as Math symbol
function evaluate(expression) {
  let expToEval = "";
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "%") {
      expToEval += "/100";
    } else {
      expToEval += expression[i];
    }
  }
  console.log(expToEval);
  return eval(expToEval);
}

// listening to the button click event to take action
for (let i = 0, len = buttons.length; i < len; i++) {
  buttons[i].addEventListener("click", (e) => {
    let btnClicked = e.target.innerText;

    if (btnClicked === "AC") {
      displayRow1.innerHTML = "";
      displayRow2.innerHTML = "";
    } else if (btnClicked === "DEL") {
      displayRow1.innerHTML = displayRow1.innerHTML.substring(
        0,
        displayRow1.innerHTML.length - 1,
      );
    } else if (btnClicked === "=") {
      displayRow2.innerHTML = evaluate(displayRow1.innerHTML);
    } else if (btnClicked === "%") {
      displayRow1.innerHTML += e.target.innerText;
      displayRow2.innerHTML = evaluate(displayRow1.innerHTML);
    } else {
      displayRow2.innerHTML = "";
      displayRow1.innerHTML += e.target.innerText;
    }
  });
}
