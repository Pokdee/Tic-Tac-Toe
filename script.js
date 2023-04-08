"use Strict";

const board = document.querySelector(".board");
const icon = document.querySelector(".icon");
console.log(icon);
const gameboard = [...Array(9)].map((x) => " ");

const game = () => {
  const display = function () {
    const arr = this.gameboard;
    for (let i = 0; i < 3; i++) {
      console.log(arr[i], arr[i + 1], arr[i + 2]);
    }
  };
  const clicker = function (e) {
    const cellNum = e.target.getAttribute("id");
    e.target.children[0].classList.add("cellInX");
    gameboard[cellNum] = "X";
    console.log(gameboard);
  };

  return { display, clicker };
};

const Board = game();

board.addEventListener("click", (e) => Board.clicker(e));
