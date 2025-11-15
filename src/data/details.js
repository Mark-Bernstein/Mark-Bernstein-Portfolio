import musicConnoisseursScreenshot from "../images/musicConnoisseursScreenshot.JPG";
import drugglerScreenshot from "../images/drugglerScreenshot.JPG";
import slashRollScreenshot from "../images/slashRollScreenshot.jpg";
import typingProdigyScreenshot from "../images/typingProdigyScreenshot.png";
import pokedex from "../images/Pokedex_screenshot_homepage.png";
import nextJsDashboardImage from "../images/nextJsDashboardImage.png";

const details = {
  typingProdigy: {
    image: typingProdigyScreenshot,
    paragraphs: [
      "Typing Prodigy is an interactive and visually engaging game designed to help you improve your typing speed and accuracy. Letters fall dynamically from the top of the screen, and your challenge is to type them before they hit the bottom. The game adapts to your performance, increasing speed as your score grows, and tracking accuracy, and levels as you progress.",
    ],
    websiteLink: "https://typing-prodigy.vercel.app/",
    github: "https://github.com/Mark-Bernstein/typing-practice-game",
  },
  slashRoll: {
    image: slashRollScreenshot,
    paragraphs: [
      "Slash Roll is a solo personal project developed using React and enhanced with framer-motion for unique animations. It offers an easy and enjoyable method to randomly select a winner from 2-12 players, while meticulously tracking each player's wins and average rolls. The game features a convenient 1 player mode for quick random rolls. Slash Roll caters to anyone seeking a fair and random selection method, making it ideal for various scenarios where luck determines the outcome.",
    ],
    websiteLink: "https://slash-roll.vercel.app",
  },
  nextJsDashboard: {
    image: nextJsDashboardImage,
    paragraphs: [
      "This is a modern, professional customer management dashboard built with Next.js 14+, TypeScript, and Tailwind CSS, featuring secure authentication, customer directory management, and real-time financial metrics tracking. The application provides a clean, responsive interface for managing customer relationships with dynamic data processing that links customers to their invoice history and transaction analytics.",
    ],
    github: "https://github.com/Mark-Bernstein/NextJS-Dashboard",
    websiteLink: "https://next-js-dashboard-orpin-phi.vercel.app/",
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
};

export default details;
