/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  //write your code here
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function genRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  return (
    who[genRandomIndex(who)] +
    " " +
    action[genRandomIndex(action)] +
    " " +
    what[genRandomIndex(what)] +
    " " +
    when[genRandomIndex(when)]
  );
};
