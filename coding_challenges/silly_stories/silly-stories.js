'use strict';

let baseStory = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const arrayNames = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const arrayLocations = ['the soup kitchen', 'Disneyland', 'the White House'];
const arrayAction = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
console.log('loaded');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

function buildStory(customName="Bob")
{
    const
    return ```
        It was ${temperature} outside, so ${character} went for a walk. When 
        they got to ${location}, they stared in horror for a few moments, then 
        ${event}. ${witness} saw the whole thing, but he was not surprised — 
        ${character} weighs ${weight}, and it was a hot day.
        ```;
}

randomize.addEventListener('click', result);
function result() {
  let currentStory = baseStory;
  let name = customName.value;
  if(name === '') {
    name = randomValueFromArray(arrayNames);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286);
    const temperature =  Math.round((94-32)*(5/9));

    currentStory = currentStory.replace('94 farenheit', temperature + ' centigrade');
    currentStory = currentStory.replace('300 pounds', weight + ' stones');    
    replaceAll(current)
  }

  story.textContent =  currentStory.replace(':insertx:', name); 
  story.textContent =  currentStory.replace(':inserty:', randomValueFromArray(arrayLocations));  
  story.textContent =  currentStory.replace(':insertz:', randomValueFromArray(arrayAction));  
  story.textContent =  currentStory.replace('Bob', name); 
  story.style.visibility = 'visible';
}


