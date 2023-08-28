
let realData = ""
const quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");
const tweetBtn = document.querySelector(".tweet-btn");
let quotesData = "";
let loader = "<i>Tap 'GET NEW QUOTE' to Load Quotes</i>";
quotes.innerHTML = loader;


const getNewQuotes = ()=>{
    let rnum = Math.floor( Math.random()*20 );
    quotesData = realData[rnum];
    quotes.innerHTML = quotesData.text;
    quotesData.author==null ?
    (author.innerHTML = "~Unknown")
    :(author.innerHTML = "~"+ quotesData.author.slice(0, -8));

}

// getNewQuotes();

const getQuotes = async()=>{
    loader = "Loading...";
    quotes.innerHTML = loader;
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();

    } catch(err){console.log(err)};
};

// tweet
const tweetNow = function(){
        let twPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
        window.open(twPost);
}

btn.addEventListener("click", function(){
    getQuotes();    
});

tweetBtn.addEventListener("click", function(){
    quotesData==null ? console.log("Waiting for Tweets") : tweetNow();
});

// await client.posts.create(1, { contents: "Hello World!" })