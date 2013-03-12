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

	// Create select field element and populate with options (optionGroup)
	function recipeCategory(){
		var recipeFormTag = document.getElementsByTagName("form"); //formTag is an array of all the form tags
		var selectLiRecipeType =$("selectType");
		var makeRecipeTypeSelect = document.createElement("select");
		makeRecipeTypeSelect.setAttribute("id", "types");
		for(var i=0, j=recipeType.length; i<j; i++){
			var makeRecipeTypeOption = document.createElement("option");
			var recipeOptText = recipeType[i];
			makeRecipeTypeOption.setAttribute("value", recipeOptText);
			makeRecipeTypeOption.innerHTML = recipeOptText;
			makeRecipeTypeSelect.appendChild(makeRecipeTypeOption);
		}
		selectLiRecipeType.appendChild(makeRecipeTypeSelect);
	}
	
	//Find value of selected radio button.
	function getSelectedRadio(){
		var relatedRadios = document.forms[0].relative;
		for(var i=0; i < relatedRadios.length; i++){
			if(relatedRadios[i].checked){
				relatedValue = relatedRadios[i].value;
			}
		}
	}
	
	//Get checkbox values.
	function getCheckboxValues(){
		whenCookedValue = [];
		if($("valentines").checked){
			var valentine = $("valentines").value;
			whenCookedValue.push(valentine);
		}
		if($("easter").checked){
			var east = $("easter").value;
			whenCookedValue.push(east);
		}
		if($("halloween").checked){
			var hall= $("halloween").value;
			whenCookedValue.push(hall);
		}
		if($("thanksgiving").checked){
			var thanks = $("thanksgiving").value;
			whenCookedValue.push(thanks);
		}
		if($("christmas").checked){
			var christ = $("christmas").value;
			whenCookedValue.push(christ);
		}
		if($("birthdays").checked){
			var birth = $("birthdays").value;
			whenCookedValue.push(birth);
		}
		if($("other").checked){
			var oth = $("other").value + ": " + $("specify").value ;
			whenCookedValue.push(oth);
		}else{
			whenCookedValue = "No specific time when you would cook this."
		}
	}
	
	// Store data to local storage with unique Id of random number
	function storeNewRecipe(){
		var uniqueId 			= Math.floor(Math.random()*1000001);
		//Gather up all our form field values and store in an object.
		//Object properties contain array with the form label and input values.
		getSelectedRadio();
		getCheckboxValues();
		var item 				={};
			item.fname 			= ["First Name:", $("fname").value];
			item.lname 			= ["Last Name:", $("lname").value];
			item.todaysDate 	= ["Date Added:", $("todaysDate").value];
/*radio*/	item.family 		= ["Related", relatedValue];
			item.email 			= ["Email:", $("email").value];
			item.group 			= ["Group", $("types").value];
			item.range 			= ["Difficulty:", $("range").value];
/*chk box*/	item.whenCooked		= ["When You Cook This:", whenCookedValue];
			item.time 			= ["Cooking Time:", $("time").value];
			item.temperature 	= ["Cooking Temperature:", $("temperature").value];
			item.directions 	= ["Cooking Directions:", $("directions").value];
		//Save data into local storage: Use Stringify to convert our object to a sting.
		localStorage.setItem(uniqueId, JSON.stringify(item));
		alert("Recipe Has Been Saved!");
	}
	
	function getRecipes(){
		//Write Data from Local Storage to the browser.
		var makeNewDiv = document.createElement("div");
		makeNewDiv.setAttribute("id", "items");
		var makeNewList = document.createElement("ul");
		makeNewDiv.appendChild(makeNewList);
		document.body.appendChild(makeNewDiv);
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeNewli = document.createElement("li");
			makeNewList.appendChild(makeNewli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var newObj = JSON.parse(value); //Convert the string from local storage value back to an object by using JSON.parse
			var makeNewSubList = document.createElement("ul");
			makeNewli.appendChild(makeNewSubList);
			for(var n in newObj){
				var makeNewSubli = document.createElement("li");
				makeNewSubList.appendChild(makeNewSubli);
				var optNewSubText = newObj[n][0] + " " + newObj[n][1];
				makeNewSubli.innerHTML = optNewSubText;
			}
		}
	}
	
	// Variable defaults
	var recipeType = [" --Choose A Type Of Recipe-- ", "Breakfast", "Lunch", "Dinner", "Appetizer", "Dessert", "Drink"],
		relatedValue,
		whenCookedValue = "No specific time when you would cook this."
	;
	recipeCategory();

	//Set Link & Submit Click Events
	var displayRecipes = $("display");
	displayRecipes.addEventListener("click", getRecipes);
	/*var clearRecipes =$("clear");
	clearRecipes.addEventListener("click", deleteLocalRecipes);*/
	var saveNewRecipe = $("saveRecipe");
	saveNewRecipe.addEventListener("click", storeNewRecipe);

});