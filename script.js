"use Strict";

const board = document.querySelector(".board");
const icon = document.querySelector(".icon");
const player1 = document.querySelector(".player_1");
const player2 = document.querySelector(".player_2");
const select = document.querySelector(".select_icon");
const gameboard = [...Array(9)].map((x) => " ");
let target;
let checker = true;

const game = () => {
  //color change

  const colorCont = function (p1clr, p2clr) {
    player1.style.backgroundColor = `${p1clr}`;
    player2.style.backgroundColor = `${p2clr}`;
  };

  //Game Start

  const gameStart = function (event) {
    target = event.target;
    if (checker) {
      const logo = icon.value;
      clicker(logo);
    }
    if (!checker) {
      const logo = icon.value === "X" ? "O" : "X";
      clicker(logo);
    }
    checker = !checker;
  };

  //Switch player

  const playerChange = function (player) {
    const playerIcon = icon.value;
    const comIcon = playerIcon === "X" ? "O" : "X";

    if (player === 1) {
      clicker(playerIcon);
      checker = !checker;
      console.log(checker);
    }
    if (player === 2) {
      clicker(comIcon);
      checker = !checker;
    }
  };

  //Click displayer
  const clicker = function (icon) {
    if (target.closest(".cell")) {
      select.style.display = "none";

      const cellNum = target.getAttribute("id");
      const cell = target.children[0];
      if (cell.classList.contains("cellInX" || "cellInO")) {
        return;
      } else {
        //if X
        if (icon === "X") {
          cell.classList.add("cellInX");

          gameboard[cellNum] = "X";
          // console.log(gameboard);
        }

        //if O
        if (icon === "O") {
          cell.classList.add("cellInO");

          gameboard[cellNum] = "O";
          // console.log(gameboard);
        }
      }
    }
  };

  return { clicker, gameStart, playerChange, colorCont };
};

const Board = game();

board.addEventListener("click", (e) => Board.gameStart(e));

//Display Gameboard array result
//  const display = function () {
//   const arr = this.gameboard;
//   for (let i = 0; i < 3; i++) {
//     console.log(arr[i], arr[i + 1], arr[i + 2]);
//   }
// };
