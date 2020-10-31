
var todoArray = ["atualizar site", "estudar javascript", "estudar servidor do github", "criar portfolio"];
var todoListEle = document.getElementById("todo-list");
var shuffleButtonEle = document.getElementById("shuffle-button");
shuffleButtonEle.addEventListener("click", shuffleArray);
function addListItems(array){
	todoListEle.innerHTML = "";
	for (let i=0; i <= array.length - 1; i++){
		console.log(array[i])
		var itemEle = document.createElement("li");
		itemEle.appendChild(document.createTextNode(array[i]));
		todoListEle.appendChild(itemEle);
	}
}

function getNewShuffledArray(sourceArray){
	var newArray = [].concat(sourceArray);
	let swapIndex = newArray.length;
	let swapWithIndex;
	let swapIndexValue;

	while (0 !== swapIndex) {
		swapWithIndex = Math.floor(Math.random() * swapIndex);
		swapIndex -= 1;
		swapIndexValue = newArray[swapIndex];
		newArray[swapIndex] = newArray[swapWithIndex];
		newArray[swapWithIndex] = swapIndexValue;
	}
	return newArray;
}

function shuffleArray(e){
	todoArray = getNewShuffledArray(todoArray);
	addListItems(todoArray)
}

addListItems(todoArray)