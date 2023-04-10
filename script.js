"use Strict";

const board = document.querySelector(".board");
const icon = document.querySelector(".icon");
const player1 = document.querySelector(".player_1");
const player2 = document.querySelector(".player_2");
const select = document.querySelector(".select_icon");

const gameboard = [...Array(9)].map((x) => " ");

const game = () => {
  //color change

  const colorCont = function (p1clr, p2clr) {
    player1.style.backgroundColor = `${p1clr}`;
    player2.style.backgroundColor = `${p2clr}`;
  };

  //Game Start

  const gameStart = function (type) {
    colorCont("green", "red");
    clicker(type);
  };

  //Click displayer
  const clicker = function (type) {
    board.addEventListener("click", (e) => {
      console.log(type);

      if (e.target.closest(".cell")) {
        select.style.display = "none";

        const cellNum = e.target.getAttribute("id");
        const cell = e.target.children[0];
        console.log(cell, cellNum);

        //if X
        if (type === "X") {
          // if (!cell.classList.contains("cellInX")) {
          cell.classList.add("cellInX");

          gameboard[cellNum] = "X";
          console.log(gameboard);
          // }
        }

        //if O
        if (type === "O") {
          // if (!cell.classList.contains("cellInO")) {
          cell.classList.add("cellInO");

          gameboard[cellNum] = "O";
          console.log(gameboard);
          // }
        }
      }
      switchplayer(2);
    });
  };

  //Switch player

  const switchplayer = function (player) {
    const playerIcon = icon.value;
    console.log("switch");

    //player 1
    if (player === 1) {
      colorCont("green", "red");
    }

    //player 2
    if (player === 2) {
      colorCont("red", "green");
      // const iconType = icon.value === "X" ? "O" : "X";
      clicker("O");
      //
    }
  };

  return { clicker, gameStart, switchplayer, colorCont };
};

const Board = game();

Board.gameStart(icon.value);

//Display Gameboard array result
//  const display = function () {
//   const arr = this.gameboard;
//   for (let i = 0; i < 3; i++) {
//     console.log(arr[i], arr[i + 1], arr[i + 2]);
//   }
// };
