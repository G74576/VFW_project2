// Kevin O'Toole
// VFW 1303
// Project 2

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){



	// getElementById Function
	function $(x){
		var elementId = document.getElementById(x);
		return elementId;
	}


	// Create select field element and populate with options
	function recipeCategory(){
		var formTag = document.getElementsByTagName("form"); //formTag is an array of all the form tags
		var selectLi =$("selectType");
		var makeSelect = document.createElement("select");
		makeSelect.setAttribute("id", "types");
		for(var i=0, j=recipeType.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = recipeType[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}

	// Variable defaults
	var recipeType = [" --Choose A Type Of Recipe-- ", "Breakfast", "Lunch", "Dinner", "Appetizer", "Dessert", "Drink"]
	recipeCategory();


	//Set Link & Submit Click Events
	/*var displayRecipes = $("display");
	displayRecipes.addEventListener("click", getRecipes);
	var clearRecipes =$("clear");
	clearRecipes.addEventListener("click", deleteLocalRecipes);
	var saveNewRecipe = $("saveRecipe");
	saveNewRecipe.addEventListener("click", storeNewRecipe);*/

});