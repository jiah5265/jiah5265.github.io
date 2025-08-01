
const newQuote = document.querySelector('#js-new-quote');
//const answerBtn = document.querySelector('#js-tweet');

newQuote.addEventListener('click', getCat);
//answerBtn.addEventListener('click', displayAnswer);

const endpoint = "https://api.thecatapi.com/v1/images/search";

let json = '';

async function getCat() {
    const answerArea = document.querySelector('#js-answer-text');
    const quoteArea = document.querySelector('#js-quote-text');
    const CatImage = document.querySelector('#js-cat-image');
    //answerArea.textContent = '';
    quoteArea.textContent = 'getting cat images';
    CatImage.src = '';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }

        json = await response.json();
        displayQuote('Meow!');
        CatImage.src = json[0].url;

    } catch (err) {
        console.log(err);
        alert('Failed to fetch a new cat images');
        quoteArea.textContent = '';
    }
}

//function displayAnswer() {
    //const answerText = json.answer;
    //const answerArea = document.querySelector('#js-answer-text');
    //answerArea.textContent = answerText;
//}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

getCat();
