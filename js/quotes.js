const quotes = [
  {
    quote: "Be yourself; everyone else is already taken",
    author: "Oscar Wilde",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Imagination encircles the world.",
    author: " Albert Einstein",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote:
      "“There is no greater agony than bearing an untold story inside you.",
    author: "Maya Angelou",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todayQuote.quote}"`;
author.innerText = `- ${todayQuote.author}`;
