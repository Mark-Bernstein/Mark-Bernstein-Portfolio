import musicConnoisseursScreenshot from "../images/musicConnoisseursScreenshot.JPG";
import burgerScreenshot from "../images/burgerScreenshot.JPG"
import noteTakerScreenshot from "../images/noteTakerScreenshot.JPG"
import cityScoutScreenshot from "../images/cityScoutScreenshot.jpg"
import weatherDashboardScreenshot from "../images/weatherDashboardScreenshot.jpg"

var details = {
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
            "This app uses JavaScript, HTML, CSS, MySql, Node, Express, Handlebars, and a homemade ORM to log out burgers. The MVC design pattern was used along with Node to Query the route data for the app. Handlebars was used to generate all of my HTML."
        ],
        "github": "https://github.com/Mark-Bernstein/burger",
        "heroku": "https://hidden-waters-13451.herokuapp.com/burgers"
    },
    "noteTaker": {
        "image": noteTakerScreenshot,
        "paragraphs": [
            "An application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file."
        ],
        "github": "https://github.com/Mark-Bernstein/note-taker",
        "heroku": "https://note-taker-web-app.herokuapp.com/"
    },
    "cityScout": {
        "image": cityScoutScreenshot,
        "paragraphs": [
            "City Scout is a web application that allows a user to get basic information about a city. The user first chooses a continent they are interested in and then they can choose from a list of countries. When the user selects a country, a list of the ten most populour cities from that country. When they choose a city, a page is rendered that displays basic information about the city such as: population, currency exchange, an image of the city, and 8 charts indicating how the city ranks in various categories like education and cost of living.",
        ],
        "github": "https://github.com/Mark-Bernstein/cityScout",
        "heroku": "https://mark-bernstein.github.io/cityScout/"
    },
    "weatherDashboard": {
        "image": weatherDashboardScreenshot,
        "paragraphs": [
            "This weather dashboard project was built for the UCSD web development bootcamp program. This application allows a user to search for any city in the world and it will return updated weather data in real-time for that city, as well as the 5-day weather forecast. The application uses OpenWeather's API to grab the weather data.",
            "Code languages used: JavaScript, CSS, jQuery."
        ],
        "github": "https://github.com/Mark-Bernstein/weather-dashboard",
        "heroku": "https://mark-bernstein.github.io/weather-dashboard/"
    }
}

export default details;