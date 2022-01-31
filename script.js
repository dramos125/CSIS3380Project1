//Array of quotes
const quotes = [];


quotes[0] = {
    quote : "A little Learning is a dang'rous Thing",
    source: "Alexander Pope",
    citation: "Book, An Essay on Criticism",
    year : "1963"
}

quotes[1] = {
    quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    citation : "",
    year : ""
}

quotes[2] = {
    quote : "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    citation : "",
    year : ""
}

quotes[3] = {
    quote : "If life were predictable it would cease to be life, and be without flavor.",
    source : "Eleanor Roosevelt",
    citation : "",
    year : ""
}

quotes[4] = {
    quote : "Life is what happens when you're busy making other plans.",
    source : "John Lennon",
    citation : "",
    year : ""
}





//A function that chooses a number between 0 and the amount of objects in the array, and assigns it to "i" in quotes[i]
function getRandomQuote() {
    let random = Math.floor(Math.random() * quotes.length); 
    let randomQuote = quotes[random];
    return randomQuote;
}



//A function that uses the getRandomQuote function to choose a random quote and checks if it has CITATION or YEAR information. 

function printQuote() {
    let randomQuote = getRandomQuote();
    let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "<p class='source'>" + randomQuote.source;

    console.log(randomQuote);
    if(randomQuote.citation != ""){
        PtoHTML1 = PtoHTML1.concat("<span class='citation'>" + randomQuote.citation + "</span>");
    }

    if(randomQuote.year != ""){
        PtoHTML1 = PtoHTML1.concat("<span class='year'>" + randomQuote.year + "</span>");
    }
    

    PtoHTML1 = PtoHTML1.concat("</p>")

    document.getElementById('quote-box').innerHTML = PtoHTML1;

   // console.log(PtoHTML1);
}

//calls the function when button is clicked
document.getElementById('load-quote').addEventListener("click", printQuote);