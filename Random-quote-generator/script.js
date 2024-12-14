const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const author = document.getElementById("author_name");
const twitterBtn = document.getElementById("tweet");
const newBtnContainer = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function loading() {
  quoteContainer.hidden = true;
  loader.hidden = false;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Getting quotes - API

let apiQuotes = [];

function selectQuotes() {
  loading();
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // check if the author field is blank and handling i5
  if (!quotes.author) {
    author.textContent = "Unknown";
  } else {
    author.textContent = quotes.author;
  }
  // handling the length of the quote
  if (quotes.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quotes.text;
  complete();
}

function tweetContent() {
  const url = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${author.innerText}`;
  window.open(url, "_blank");
  console.log("button clicked");
}

twitterBtn.addEventListener("click", tweetContent);
newBtnContainer.addEventListener("click", selectQuotes);

async function getQuotes() {
  try {
    const responses = await fetch(
      "https://jacintodesign.github.io/quotes-api/data/quotes.json"
    );
    apiQuotes = await responses.json();
    selectQuotes();
  } catch (error) {
    console.log(error);
  }
}

getQuotes();
