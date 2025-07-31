const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAlts = {
    'pic1.jpg': 'eye',
    'pic2.jpg': 'rock',
    'pic3.jpg': 'flower',
    'pic4.jpg': 'wall',
    'pic5.jpg': 'butterfly'
}

/* Looping through images */
images.forEach(fileName => {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${fileName}`);
newImage.setAttribute('alt', imageAlts[fileName]);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${fileName}`);
    displayedImage.setAttribute('alt', imageAlts[fileName]);
});
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const className = btn.getAttribute('class');
    if (className == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});




