"use Strict";

const board = document.querySelector(".board");

const createBoard = () => {
  const gameboard = [...Array(9)].map((x) => " ");
  const displayBoard = function () {
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

  return { gameboard, displayBoard, clicker };
};

const createplayer = (name) => {
  return { name };
};

const playerOne = createplayer("player_1");
const playerTwo = createplayer("player_2");

const Gameboard = createBoard();
board.addEventListener("click", (e) => Gameboard.clicker(e));
