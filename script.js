//Where the user types in a fruit to search has an id of fruit
const input = document.querySelector("#fruit");
//container where we will display our suggestions from user input in an unordered list
const suggestions = document.querySelector(".suggestions ul");

//List of all the fruit in our search, we will use this array to search for matching fruits based on the user's input.
const fruit = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

//search function takes a string as input and filters the fruit array. It converts both the fruit names and the input to lowercase to make the search case-insensitive. The filter method returns a new array of fruits that include the input string.
const search = (str) => {
  return fruit.filter((fruitItem) =>
    fruitItem.toLowerCase().includes(str.toLowerCase())
  );
};

//searchHandler function is triggered whenever the user types in the input field. It gets the current value of the input field. If the input is not empty it calls the search function and passes the results to showSuggestions. Else if the input is empty it clears the suggestions.
const searchHandler = (e) => {
  const inputVal = e.target.value;
  if (inputVal.length > 0) {
    const results = search(inputVal);
    showSuggestions(results);
  } else {
    suggestions.innerHTML = "";
  }
};

//showSuggestions function takes the results and updates the suggestions list. It first clears any existing suggestions. Then for each result it creates a new <li> element, sets its text content to the fruit name, and appends it to the suggestions list.
const showSuggestions = (results) => {
  suggestions.innerHTML = "";
  for (let result of results) {
    const li = document.createElement("li");
    li.textContent = result;
    suggestions.appendChild(li);
  }
};

//useSuggestions function is triggered when the user clicks on a suggestion. If the clicked element is an <li> it sets the input value to the clicked suggestion and clears the suggestion list
const useSuggestion = (e) => {
  if (e.target.tagName === "LI") {
    input.value = e.target.textContent;
    suggestions.innerHTML = "";
  }
};

//searchHandler function is called whenever a key is released in the input field
input.addEventListener("keyup", searchHandler);
//useSuggestion function is called whenever a suggestion is clicked
suggestions.addEventListener("click", useSuggestion);

// Summary:
// Input Handling: The user types in the input text field, triggering the searchHandler function.

// Search Logic: The search function filters the fruit array based on the user's input.

// Display Suggestions: The showSuggestions function displays the filtered results as an unordered list of suggestions.

// Select Suggestion: When a suggestion is clicked, the useSuggestion function sets the input text field to the selected suggestion and clears the suggestion list.
