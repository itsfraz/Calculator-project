let num1 = prompt("Enter the first number")
let num2 = prompt("Enter the second number")

num1 = Number.parseInt(num1)
num2 = Number.parseInt(num2)

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
function add() {
    let result = num1 + num2
    sumEl.textContent = "Ans : " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Ans : " + result
}

function devide() {
    let result = num1 / num2
    sumEl.textContent = "Ans : " + result
}
function multi() {
    let result = num1 * num2
    sumEl.textContent = "Ans :" + result
}