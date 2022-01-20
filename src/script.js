// Cached DOM elements
const button = document.getElementById('button');
const audio = document.getElementById('audio');

// test = () => {
//   VoiceRSS.speech({
//     key: '3fe402a15b524fb7be857b9a08902468',
//     src: 'Hello World',
//     hl: 'en-us',
//     r: 0,
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false,
//   });
// };

// // test();

// Get jokes from Joke API
async function getJokes() {
  const API_URL =
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
  try {
    const resp = await fetch(API_URL);
    const data = await resp.json();
    let joke;
    if (data.type === 'twopart') {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    console.log(joke);
  } catch (error) {
    console.log(error);
  }
}

// getJokes();
