const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}





const storyText = "It was a freezing -270 fahrenheit spacewalk, so :insertx: floated silently through the stars. When they reached :inserty:, they suddenly :insertz:. Bob was amazed, especially since :insertx: had just logged 300 pounds on their space suit's weight sensor.";

const insertX = ["Commander Nova", "Alien Zorb", "Captain Stardust"];
const insertY = ["the Orion Nebula", "the asteroid belt", "the surface of Mars"];
const insertZ = ["discovered a hidden portal", "encountered a swarm of space jellyfish", "activated an ancient alien artifact"];




randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {
      const weight = Math.round(300 / 14) + ' stone';
      const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';

      newStory = newStory.replace('300 pounds', weight);
      newStory = newStory.replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
