let startPrices = Array.from(document.querySelectorAll(".start"));
let prices = startPrices.map((element) => +element.innerHTML);

let btn = document.querySelector(".sale-button");
let total = document.querySelector(".total-number");

let newPrices = [];
prices.map((item) => {
	let itemDiscount = item * 0.2;
	let itemPrice = item - itemDiscount;
	newPrices.push(itemPrice);
});

btn.addEventListener("click", function () {
	let sum = 0;
	prices.map((item) => (sum += item));
	let discount = sum * 0.2;
	let salePrice = sum - discount;
	total.textContent = salePrice + " руб.";
	startPrices.forEach((el, i) => (el.textContent = newPrices[i]));
});
