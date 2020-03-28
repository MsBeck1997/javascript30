window.onload = function () {
	initShoppingList();
};

function initShoppingList () {
	let form = document.getElementById("item-form");

	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

//Prevents pushing of code to the backend
function handleItemForm(event, formRef) {
	if (event.preventDefault) {
		event.preventDefault();
	}

	addItemToShoppingList();

	return false;
}

function addItemToShoppingList() {
	let itemName = document.getElementById("item-name");
	let itemAmount = document.getElementById("item-amount");

	let itemHTML = createListItemHTML(itemName.value, itemAmount.value);
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHTML);
}

function createListItemHTML(itemName, itemAmount) {
	return `<li>
					${itemName} - ${itemAmount}
				</li>
		`;
}