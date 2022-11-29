import "./css/index.css";

import { changeCardType } from "./script/changeCardFlag";
import { maskInputs } from "./script/maskInput";

maskInputs();

changeCardType();

const addButton = document.querySelector("#add-card")
addButton.addEventListener("click", () => {
    alert("Cartão adicionado :)")
})

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
})

const inputCardHolder = document.querySelector("#card-holder")
inputCardHolder.addEventListener("input", ({ target }) => {
    const nameHolder = document.querySelector(".cc-holder .value")
    
    nameHolder.innerHTML = target.value.length === 0 ? "FULANO DA SILVA" : target.value
})