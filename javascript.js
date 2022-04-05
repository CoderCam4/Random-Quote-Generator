const quote = [
    "Hey Patrick, I thought of something funnier than 24\… 25! – Spongebob",
    "I knew I shouldn\’t have gotten out of bed today. –Squidward",
    "A 5 letter word for happiness – MONEY. – Mr. Krabs ",
    "Stupidity isn\’t a virus, but it sure is spreading like one. – Sandy",
    "You need six hundred to pass, you got six. – Mrs. Puff",
    "Just when I thought they couldn\’t get any stupider. – Squidward",
    "F is for friends who do stuff together! - SpongeBob",
    "Moss always points to civilization.- SpongeBob",
    "Fortunately, I have enough talent for all of you.- Squidward",
    "The best time to wear a striped sweater…is all the time!- SpongeBob",
    "The Krusty Krab pizza is the pizza for you and me.- Spongebob",
    "No one can change a person, but someone can be a reason for that person to change.- Spongebob",
    "Oh, My aching tentacles. - Squidward",
    "I will destroy all of you! - Plankton",
    "I\’m ready! - Spongebob",
    "MY LEG! MY LEG! - Fred the Fish"
]

function newQuote() {
const randomNumber = Math.floor(Math.random() * (quote.length));
document.getElementById('quoteDisplay').innerText = quote[randomNumber];
document.getElementById('quoteDisplay').style.textAlign = 'center';
document.getElementById('quoteDisplay').style.fontSize = 'x-large';
document.getElementById('quoteDisplay').style.fontFamily = 'verdana','sans-serif';

}


