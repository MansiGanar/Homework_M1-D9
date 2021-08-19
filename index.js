const displayEntireBingoBoard = function () {
  let bingoBoardNode = document.getElementById("bingo-box");

  let setArr = [];
  function nocopy() {
    for (i = 1; i <= 80; i++) {
      let number = Math.floor(1 + Math.random() * 76);

      if (!setArr.find((e) => e === number)) {
        setArr.push(number);
      }
    }
  }

  for (let boardcell = 1; boardcell <= 76; boardcell++) {
    console.log(setArr);
    nocopy();
    let newBingoCell = document.createElement("div");
    newBingoCell.innerText = setArr[boardcell - 1];

    newBingoCell.classList.add("cell");
    bingoBoardNode.appendChild(newBingoCell);
  }
};

function randomSelect() {
  let number = Math.floor(1 + Math.random() * 76);
  console.log(number);
  let element = document.getElementsByClassName("cell")[number];

  element.classList.add("highlight");

  let numberCall = document.getElementById("numberCall");
  document.getElementById("numberCall").innerHTML = element.innerHTML;
  setInterval(function () {
    element.remove();
    numberCall.remove();
  }, 1000);

  // setTimeout(() => document.getElementById("numberCall").remove(), 1000);
}

window.onload = function () {
  displayEntireBingoBoard();
};
