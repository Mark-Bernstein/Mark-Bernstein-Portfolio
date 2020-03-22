import musicConnoisseursScreenshot from "../images/musicConnoisseursScreenshot.JPG";
import burgerScreenshot from "../images/burgerScreenshot.JPG"
import noteTakerScreenshot from "../images/noteTakerScreenshot.JPG"
import cityScoutScreenshot from "../images/cityScoutScreenshot.jpg"
import drugglerScreenshot from "../images/drugglerScreenshot.JPG"
// import weatherDashboardScreenshot from "../images/weatherDashboardScreenshot.jpg"


var details = {
    "DrugBud": {
        "image": drugglerScreenshot,
        "paragraphs": [
            "An application that allows users to track when they need to take their medications, as well as allowing users to search for interactions between different drugs. Users are able to sign up and create a unique profile that allows the user to add, edit and delete prescription drugs from their pill tracker dashboard. Drugglers is a MERN application using MongoDB, Express, React and Node.js. Our database uses two collections to establish an association between a user’s profile and the drugs they have added to their pill tracker dashboard. For UI, our team used the Material-UI library to speed up component building."
        ],
        "github": "https://github.com/Mark-Bernstein/DrugBud",
        "heroku": "https://druggler.herokuapp.com/"
    },
    "musicConnoisseurs": {
        "image": musicConnoisseursScreenshot,
        "paragraphs": [
            "An application that creates a database of music genres and provides a description to broaden your musical knowledge. The genres are user submitted along with descriptions and comments. Music videos to further illustrate the music genre are provided via a link to YouTube."
        ],
        "github": "https://github.com/Mark-Bernstein/music-connoisseurs",
        "heroku": "https://music-connoisseurs.herokuapp.com/genre"
    },
    "burger": {
        "image": burgerScreenshot,
        "paragraphs": [
            "An application uses JavaScript, HTML, CSS, MySql, Node, Express, Handlebars, and a homemade ORM to log out burgers. The MVC design pattern was used along with Node to Query the route data for the app. Handlebars was used to generate all of my HTML."
        ],
        "github": "https://github.com/Mark-Bernstein/burger",
        "heroku": "https://mvc-burger-app.herokuapp.com/burgers"
    },
    "noteTaker": {
        "image": noteTakerScreenshot,
        "paragraphs": [
            "An application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file."
        ],
        "github": "https://github.com/Mark-Bernstein/note-taker",
        "heroku": "https://note-taker-web-app.herokuapp.com"
    },
    "cityScout": {
        "image": cityScoutScreenshot,
        "paragraphs": [
            "An application that allows a user to get basic information about a city. The user first chooses a continent they are interested in and then they can choose from a list of countries. When the user selects a country, a list of the ten most populour cities from that country. When they choose a city, a page is rendered that displays basic information about the city such as: population, currency exchange, an image of the city, and 8 charts indicating how the city ranks in various categories like education and cost of living.",
        ],
        "github": "https://github.com/Mark-Bernstein/cityScout",
        "heroku": "https://mark-bernstein.github.io/cityScout/"
    }
    // "weatherDashboard": {
    //     "image": weatherDashboardScreenshot,
    //     "paragraphs": [
    //         "An application that was built for the UCSD Full-Stack Coding bootcamp. This app allows a user to search for any city in the world and it will return updated weather data in real-time for that city, as well as the 5-day weather forecast. The application uses OpenWeather's API to grab the weather data.",
    //         "Code languages used: JavaScript, CSS, jQuery."
    //     ],
    //     "github": "https://github.com/Mark-Bernstein/weather-dashboard",
    //     "heroku": "https://mark-bernstein.github.io/weather-dashboard/"
    // }
}

export default details;