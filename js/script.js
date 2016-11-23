//Quotes and Images
var quotes = [
	{
		quote: "Always have Faith. Always have Hope.",
		source: "img/khaled0.jpg",
		index: 0
	},
	{
		quote: "The key is to make it.",
		source: "img/djLion.jpg",
		index: 1
	},
	{
		quote: "Key to more success is a clean heart and a clean face.",
		source: "img/djClean.gif",
		index: 2
	},
	{
		quote: "Those that weather the storm are the great ones.",
		source: "img/djPoint.jpg",
		index: 3
	},
	{
		quote: "They'll try to close the door on you... Just open it.",
		source: "img/djKey.jpg",
		index: 4
	},
	{
		quote: "There will be road blocks, but we will overcome them.",
		source: "img/khaled1.jpg",
		index: 5
	},
	{
		quote: "The key to more success is coco butter.",
		source: "img/djCocoa.jpg",
		index: 6
	},
	{
		quote: "Another one, no. Another two, drop two singles at a time.",
		source: "img/khaled2.jpg",
		index: 7
	},
	{
		quote: "Congratulations, you played yourself.",
		source: "img/khaled3.jpg",
		index: 8
	}
]

//Timer Interval set to 9 seconds
var timer = setInterval(function(){ printQuote(); }, 9000);
//Random Quote
var getRandomQuote = function() {
	//Get Random Integer
	var randomInt = Math.floor(Math.random() * quotes.length);
	//Quote Index
	var quoteObject = quotes[randomInt];
	//Quote Object within Quotes Array
	return quoteObject;
}
//Display each quote once before showing repeat of quote
var usedQuotes = [];
var quoteTracker = function() {
	//Get Random Quote
	var quoteObject = getRandomQuote();
	//If quote index is already used get another quote
	if (usedQuotes.indexOf(quoteObject.index) > -1) {
		//Clear the usedQuotes if they've all been used once
		if (usedQuotes.length === quotes.length) {
			usedQuotes = [];
		}
		quoteTracker();
	//Otherwise push the index into the tracker array and return the quote object
	} else {
		usedQuotes.push(quoteObject.index);
		return quoteObject;
	}
}
//Random Color
var getRandomColor = function() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}
	return color;
}
//Print Quote
var printQuote = function() {
	var newQuote = quoteTracker();
	//Adds HTML to the page
	document.getElementById('quote-box').innerHTML = '<p class="quote">' + newQuote.quote + '</p>' 
		+ '<p class="source">DJ Khaled</p>' + '<img class="profile" src="' + newQuote.source + '">';
	//New Color to the Background
	var newColor = getRandomColor();
	document.body.style.backgroundColor = newColor;
	// Clears Interval
	clearInterval(timer);
	//Restarts Interval
	timer = setInterval(function(){ printQuote(); }, 9000);
	//Figuring out which quotes have been used
	console.log(usedQuotes);
	return;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

