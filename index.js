let expression = document.getElementById("display");
function action(e) {
  let exp = e.innerText;
  switch (exp) {
    case "C": {
      expression.innerText = "";
      break;
    }
    case "D": {
      if (expression.innerText) {
        expression.innerText = expression.innerText.slice(0, -1);
      }
      break;
    }
    case "=": {
      try {
        expression.innerText = eval(expression.innerText);
      } catch {
        expression.innerText = "Math Error!";
      }
      break;
    }
    default: {
      expression.innerText += exp;
    }
  }
}
