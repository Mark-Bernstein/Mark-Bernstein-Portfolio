import musicConnoisseursScreenshot from "../images/musicConnoisseursScreenshot.JPG";
import burgerScreenshot from "../images/burgerScreenshot.JPG";
import noteTakerScreenshot from "../images/noteTakerScreenshot.JPG";
import cityScoutScreenshot from "../images/cityScoutScreenshot.jpg";
import drugglerScreenshot from "../images/drugglerScreenshot.JPG";
import slashRollScreenshot from "../images/slashRollScreenshot.jpg";
import pokedex from "../images/Pokedex_screenshot_homepage.png";

const details = {
  slashRoll: {
    image: slashRollScreenshot,
    paragraphs: [
      "Slash Roll is a solo personal project developed using React and enhanced with framer-motion for unique animations. It offers an easy and enjoyable method to randomly select a winner from 2-12 players, while meticulously tracking each player's wins and average rolls. The game features a convenient 1 player mode for quick random rolls. Slash Roll caters to anyone seeking a fair and random selection method, making it ideal for various scenarios where luck determines the outcome.",
    ],
    websiteLink: "https://slash-roll.vercel.app",
  },
  pokedex: {
    image: pokedex,
    paragraphs: [
      "This Typescript project fetches data from a pokemon api and transforms the data into a visually appealing website that allows the user to filter through and save their favorite Pokémon.",
    ],
    github: "https://github.com/Mark-Bernstein/Pokemon-Pokedex",
    websiteLink: "https://pokemon-pokedex-kappa.vercel.app/",
  },
  druggler: {
    image: drugglerScreenshot,
    paragraphs: [
      "An application that allows users to track when they need to take their medications, as well as allowing users to search for interactions between different drugs. Users are able to sign up and create a unique profile that allows the user to add, edit and delete prescription drugs from their pill tracker dashboard. Drugglers is a MERN application using MongoDB, Express, React and Node.js. Our database uses two collections to establish an association between a user’s profile and the drugs they have added to their pill tracker dashboard. For UI, our team used the Material-UI library to speed up component building.",
    ],
    github: "https://github.com/Mark-Bernstein/druggler",
  },
  musicConnoisseurs: {
    image: musicConnoisseursScreenshot,
    paragraphs: [
      "An application that creates a database of music genres and provides a description to broaden your musical knowledge. The genres are user submitted along with descriptions and comments. Music videos to further illustrate the music genre are provided via a link to YouTube.",
    ],
    github: "https://github.com/Mark-Bernstein/music-connoisseurs",
  },
  cityScout: {
    image: cityScoutScreenshot,
    paragraphs: [
      "An application that allows a user to get basic information about a city. The user first chooses a continent they are interested in and then they can choose from a list of countries. When the user selects a country, a list of the ten most populour cities from that country. When they choose a city, a page is rendered that displays basic information about the city such as: population, currency exchange, an image of the city, and 8 charts indicating how the city ranks in various categories like education and cost of living.",
    ],
    github: "https://github.com/Mark-Bernstein/cityScout",
    websiteLink: "https://mark-bernstein.github.io/cityScout/",
  },
  burger: {
    image: burgerScreenshot,
    paragraphs: [
      "An application uses JavaScript, HTML, CSS, MySql, Node, Express, Handlebars, and a homemade ORM to log out burgers. The MVC design pattern was used along with Node to Query the route data for the app. Handlebars was used to generate all of my HTML.",
    ],
    github: "https://github.com/Mark-Bernstein/burger",
  },
  noteTaker: {
    image: noteTakerScreenshot,
    paragraphs: [
      "An application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file.",
    ],
    github: "https://github.com/Mark-Bernstein/note-taker",
    websiteLink: "https://note-taker-web-app.herokuapp.com",
  },
};

export default details;
