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

//Interval
var timer = setInterval(function(){ printQuote(); }, 9000);
//Random Quote
var getRandomQuote = function() {
	var randomInt = Math.floor(Math.random() * quotes.length);
	var quoteObject = quotes[randomInt];
	return quoteObject;
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
	var newQuote = getRandomQuote();
	document.getElementById('quote-box').innerHTML = '<p class="quote">' + newQuote.quote + '</p>' 
		+ '<p class="source">DJ Khaled</p>' + '<img class="profile" src="' + newQuote.source + '">';
	var newColor = getRandomColor();
	document.body.style.backgroundColor = newColor;
	clearInterval(timer);
	timer = setInterval(function(){ printQuote(); }, 9000);
	return;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

