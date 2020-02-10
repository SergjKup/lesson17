function run() {
  let number = document.getElementById("number-input").value;
  number = Number.parseInt(number);
  if (checkInput(number)) {
    getTotalResult(number);
  } else {
    alert("Удостоверьтесь в правильности введенных данных!");
  }
}

function getTotalResult(number) {
  let result = "";
  let resultBlock = document.getElementsByClassName("result");
  resultBlock.innerHTML = "";
  let resultId = document.getElementById("result");


  for (var i = 1; i <= number; i++) {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(fizzbuzzy(i));
    node.appendChild(textnode);
    resultId.appendChild(node);
  }
}
document.body.appendChild(resultId);


function checkInput(number) {
  return 0 < number && 100 >= number;
}

function fizzbuzzy(number) {
  if (number % 15 === 0) {
    return "fizzbuzz";
  }

  if (number % 5 === 0) {
    return "buzz";
  }

  if (number % 3 === 0) {
    return "fizz";
  }

  return number;
}
