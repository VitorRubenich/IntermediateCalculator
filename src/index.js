let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

var f = [];
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  if (f[n] > 0) return f[n];
  return (f[n] = factorial(n - 1) * n);
}
function double(n) {
  return n * n;
}
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "√":
        if (display.innerText) {
          try {
            display.innerText = Math.sqrt(eval(display.innerText));
          } catch {
            display.innerText = "Error";
          }
        }

        break;
      case "n!":
        if (display.innerText) {
          try {
            display.innerText = factorial(eval(display.innerText));
          } catch {
            display.innerText = "Error";
          }
        }

        break;
      case "x²":
        if (display.innerText) {
          try {
            display.innerText = double(eval(display.innerText));
          } catch {
            display.innerText = "Error";
          }
        }

        break;
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "log":
        if (display.innerText) {
          try {
            display.innerText = Math.log(eval(display.innerText));
          } catch {
            display.innerText = "Error";
          }
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display: display.innerText = "Error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
