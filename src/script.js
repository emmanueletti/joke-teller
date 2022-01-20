// Cached DOM elements
const button = document.getElementById('button');
const audio = document.getElementById('audio');

const toggleButton = (buttonElement) => {
  buttonElement.disabled = !buttonElement.disabled;
};

// Turn joke text into speech
async function turnTextToSpeech(text) {
  try {
    VoiceRSS.speech({
      key: '3fe402a15b524fb7be857b9a08902468',
      src: text,
      hl: 'en-us',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false,
    });
  } catch (error) {
    console.log(error);
  }
}

// Get jokes from Joke API
function getJoke() {
  toggleButton(button);
  const API_URL =
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

  // Return a promise to make the getJoke function thenable
  return fetch(API_URL)
    .then((resp) => resp.json())
    .then((data) => {
      let joke;
      if (data.type === 'twopart') {
        joke = `${data.setup} ... ${data.delivery}`;
      } else {
        joke = data.joke;
      }
      return joke;
    })
    .catch((err) => {
      console.log(err);
      toggleButton(button);
    });
}

const tellUserAJoke = () => {
  getJoke().then((joke) => turnTextToSpeech(joke));
};

// Event listeners
button.addEventListener('click', tellUserAJoke);
audio.addEventListener('ended', () => toggleButton(button));
