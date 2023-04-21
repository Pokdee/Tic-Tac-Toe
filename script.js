"use Strict";

const board = document.querySelector(".board");
const icon = document.querySelector(".icon");
const player1 = document.querySelector(".player_1");
const player2 = document.querySelector(".player_2");
const select = document.querySelector(".select_icon");
const overflow = document.querySelector(".overflow");
const winner = document.querySelector(".winner_name");
let target;

const player = (playNum) => {
  const name = `Player ${playNum}`;
  const gameboard = new Array(9);
  return { name, gameboard };
};

const p1 = player(1);
const p2 = player(2);

let checker = true;

const game = () => {
  //color control

  const colorCont = function (p1clr, p2clr) {
    player1.style.backgroundColor = `${p1clr}`;
    player2.style.backgroundColor = `${p2clr}`;
  };

  //color Change

  const changeColor = function () {
    if (checker) {
      colorCont("green", "red");
    }
    if (!checker) {
      colorCont("red", "green");
    }
  };

  //Game Start

  const gameStart = function (event) {
    target = event.target;

    if (checker) {
      const playerIcon = icon.value;

      clicker(playerIcon, p1);
    }
    if (!checker) {
      const comIcon = icon.value === "X" ? "O" : "X";
      clicker(comIcon, p2);
    }
    checker = !checker;
    changeColor();
  };

  //Data manage
  const winManager = function (playerIcon, playerObj) {
    console.log(`it ${playerObj.name}`);
    console.log(playerObj);

    let match;
    let arr = playerObj.gameboard;
    if (
      arr[0] === playerIcon ||
      arr[2] === playerIcon ||
      arr[3] === playerIcon ||
      arr[4] === playerIcon ||
      arr[6] === playerIcon ||
      arr[8] === playerIcon
    ) {
      if (arr[0] && arr[1] && arr[2]) {
        if (arr[0] === arr[1] && arr[1] === arr[2]) {
          match = true;
        }
      }
      if (arr[0] && arr[4] && arr[8]) {
        if (arr[0] === arr[4] && arr[4] === arr[8]) {
          match = true;
        }
      }
      if (arr[0] && arr[3] && arr[6]) {
        if (arr[0] === arr[3] && arr[3] === arr[6]) {
          match = true;
        }
      }
    }

    if (
      arr[1] === playerIcon ||
      arr[4] === playerIcon ||
      arr[7] === playerIcon
    ) {
      if (arr[1] && arr[4] && arr[7]) {
        if (arr[1] === arr[4] && arr[4] === arr[7]) {
          match = true;
        }
      }
    }
    if (
      arr[2] === playerIcon ||
      arr[4] === playerIcon ||
      arr[5] === playerIcon ||
      arr[6] === playerIcon ||
      arr[8] === playerIcon
    ) {
      if (arr[2] && arr[4] && arr[6]) {
        if (arr[2] === arr[4] && arr[4] === arr[6]) {
          match = true;
        }
      }
      if (arr[2] && arr[5] && arr[8]) {
        if (arr[2] === arr[5] && arr[5] === arr[8]) {
          match = true;
        }
      }
    }
    if (arr[3] === playerIcon || arr[4] === playerIcon) {
      if (arr[3] && arr[4] && arr[5]) {
        if (arr[3] === arr[4] && arr[4] === arr[5]) {
          match = true;
        }
      }
    }
    if (
      arr[6] === playerIcon ||
      arr[7] === playerIcon ||
      arr[8] === playerIcon
    ) {
      if (arr[6] && arr[7] && arr[8]) {
        if (arr[6] === arr[7] && arr[7] === arr[8]) {
          match = true;
        }
      }
    }
    return match;
  };

  //display overflow when win or loss
  const overflower = function (playername) {
    overflow.classList.remove("hide");
    winner.textContent = playername;
  };

  //Click displayer
  const clicker = function (playerIcon, player) {
    if (target.closest(".cell")) {
      select.style.display = "none";

      const cellNum = target.getAttribute("id");
      const cell = target.children[0];
      if (cell.classList.contains("cellInX" || "cellInO")) {
        return;
      } else {
        //if X
        if (playerIcon === "X") {
          cell.classList.add("cellInX");

          player.gameboard[cellNum] = "X";

          const result = winManager(playerIcon, player);
          if (result) {
            overflower(player.name);
          }
          console.log(player.gameboard);
        }

        //if O
        if (playerIcon === "O") {
          cell.classList.add("cellInO");
          player.gameboard[cellNum] = "O";

          winManager(playerIcon, player);
          console.log(player.gameboard);
        }
      }
    }
  };

  return { clicker, gameStart, colorCont, changeColor, winManager, overflower };
};

const Board = game();

board.addEventListener("click", (e) => Board.gameStart(e));
window.addEventListener("load", () => Board.changeColor());
