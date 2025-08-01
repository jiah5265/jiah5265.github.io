
const newQuote = document.querySelector('#js-new-quote');
const saveBtn = document.querySelector('#js-tweet');

newQuote.addEventListener('click', getCat);
saveBtn.addEventListener('click', saveCatImage);

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
//ex
function saveCatImage() {
    const CatImage = document.querySelector('#js-cat-image');
    const savedImagesContainer = document.querySelector('#saved-images');
    if (!CatImage.src) return;

    const savedImg = document.createElement('img');
    savedImg.src = CatImage.src;
    savedImg.style.width = '240px'; 
    savedImg.style.height = '140px';
    savedImg.style.borderRadius = '10px';
    savedImg.style.objectFit = 'cover';

    savedImagesContainer.appendChild(savedImg);
}
//ex
function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

getCat();

