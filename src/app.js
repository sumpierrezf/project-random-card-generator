/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var palos = ["♦", "♥", "♠", "♣"];

  const numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "As"
  ];
  let indexPalos = Math.floor(Math.random() * palos.length);
  let indexNumeros = Math.floor(Math.random() * numeros.length);

  let color =
    palos[indexPalos] == "♦" || palos[indexPalos] == "♥" ? "red" : "black";

  console.log(palos[indexPalos]);
  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  let number = document.querySelector(".number");
  top.innerHTML = palos[indexPalos];
  document.querySelector(".top").style.color = color;
  document.querySelector(".bottom").style.color = color;
  document.querySelector(".number").style.color = color;
  bottom.innerHTML = palos[indexPalos];
  number.innerHTML = numeros[indexNumeros];
};
