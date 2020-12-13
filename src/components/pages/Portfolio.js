import React from "react";
import DevourThatBurger from "../../utils/images/Portfolio/DevourThatBurger.gif";
import PlantAhead from "../../utils/images/Portfolio/PlantAhead.PNG"
import GameKiwi from "../../utils/images/Portfolio/GameKiwi.PNG";
import GeneratedPassword from "../../utils/images/Portfolio/GeneratedPassword.PNG";
import RecipeRoulette from "../../utils/images/Portfolio/RecipeRoulette.PNG";
import WeatherDashboard from "../../utils/images/Portfolio/WeatherDashboard.PNG";
import TrackThatBudget from "../../utils/images/Portfolio/TrackThatBudget.gif";
import FitnessTracker from "../../utils/images/Portfolio/FitnessTracker.gif";
import GeneratedTeam from "../../utils/images/Portfolio/GeneratedTeam.PNG";
import ReadMeGenerator from "../../utils/images/Portfolio/ReadMeGenerator.gif";
import Project from "../Project"
function Portfolio() {
    return (

        <div className="container " >
            <main className="row mt-3 mb-3 border-bottom -info ">
                <div className="col-md-6 ">
                    <h1>Portfolio</h1>
                </div>
                {/* ================cards================================= */}

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5" >
                    <Project
                        projectImg={PlantAhead}
                        imageAlt={"Plant Ahead Main Page"}
                        projectTitle={"Plant Ahead"}
                        projectDescription=
                        {"An app for the green-thumbs out there, allows users to sign-up and search for plants to add to gardening projects."
                        + "Users may share input to their experience growing certain plants and view other User experiences with the community"
                        + " section of the application."
                        }
                        imgLink={"https://infinite-plains-30611.herokuapp.com/"}
                        repoLink={"https://github.com/Deftone1/plant-ahead"}
                        techList={"React, JavaScript, Express, Bootstrap-React, React-Spring, MongoDB, Mongoose, Node-Fetch, Trefle"}
                    />
                    <Project
                        projectImg={GameKiwi}
                        imageAlt={"GameKiwi Home Page"}
                        projectTitle={"GameKiwi"}
                        projectDescription={"Allows users to create accounts and browse a large selection of video games." 
                        + " Members have the ability to save games to their top-ten list and share with other users."}
                        imgLink={"https://infinite-plains-30611.herokuapp.com/"}
                        repoLink={"https://github.com/Gerardo-S/bluetooth-coffee-cup"}
                        techList={"Express, Express-Handlebars, Passport, and Sequelize"}
                    />

                    <Project
                        projectImg={DevourThatBurger}
                        imageAlt={"Eat Da Burger Home Page"}
                        projectTitle={"Devour That Burger"}
                        projectDescription={"Users inputs names of their favorite burgers." + 
                        " Each burger after submission is listed with a devour button which users click to devour burger."}
                        imgLink={"https://destroy-da-burger.herokuapp.com/"}
                        repoLink={"https://github.com/Gerardo-S/burger"}
                        techList={"MySQL, Node, Express, Handlebars, ORM"}
                    />

                    <Project
                        projectImg={RecipeRoulette}
                        imageAlt={"Recipe Roulette Home Page"}
                        projectTitle={"Recipe Roulette"}
                        projectDescription={"Expand your recipe collection." +
                         " This app offers users the ability to search for new recipes and cuisines."}
                        imgLink={"https://babydylan.github.io/recipe-roulette/"}
                        repoLink={"https://github.com/babydylan/recipe-roulette"}
                        techList={"HTML, CSS, 2 API's"}
                        
                    />

                    <Project
                        projectImg={ReadMeGenerator}
                        imageAlt={"ReadMe Generator Repo"}
                        projectTitle={"ReadMe Generator"}
                        projectDescription={"Allows users to create a ReadMe file" + 
                        " through a series of questions from the command line."}
                        imgLink={"https://github.com/Gerardo-S/README-Generator"}
                        repoLink={"https://github.com/Gerardo-S/README-Generator"}
                        techList={"Inquirer, Node.js"}
                    />

                    <Project
                        projectImg={TrackThatBudget}
                        imageAlt={"Track That Budget Home Page"}
                        projectTitle={"Track Your Budget"}
                        projectDescription={"Functional budget tracker with offline accessability."}
                        imgLink={"https://tracking-that-budget.herokuapp.com/"}
                        repoLink={"https://github.com/Gerardo-S/track-your-budget"}
                        techList={"IndexedDb, Service-Worker, Progressive Web App"}
                    />

                    <Project
                        projectImg={FitnessTracker}
                        imageAlt={"Fitness Tracker Home Page"}
                        projectTitle={"Fitness Tracker"}
                        projectDescription={"An app that lets users track their workouts."}
                        imgLink={"https://fitness-on-point.herokuapp.com/"}
                        repoLink={"https://github.com/Gerardo-S/fitness-tracker"}
                        techList={"Mongoose, and Express"}
                    />

                    <Project
                        projectImg={GeneratedTeam}
                        imageAlt={"Team Generator Repo"}
                        projectTitle={"Team Generator"}
                        projectDescription={"An app that generates an HTML webpage displaying a Team member roster."}
                        imgLink={"https://github.com/Gerardo-S/team-profile-generator"}
                        repoLink={"https://github.com/Gerardo-S/team-profile-generator"}
                        techList={"Node.js, Inquirer, Jest"}
                    />

                    <Project
                        projectImg={WeatherDashboard}
                        imageAlt={"Weather Dashboard Home Page"}
                        projectTitle={"Weather Dashboard"}
                        projectDescription={"Displays a live five day forecast from city of choice."}
                        imgLink={"https://gerardo-s.github.io/5-Day_Forecast/"}
                        repoLink={"https://github.com/Gerardo-S/5-Day_Forecast"}
                        techList={"HTML, CSS, OpenWeather API, Bootstrap"}
                    />

                    <Project
                        projectImg={GeneratedPassword}
                        imageAlt={"Generate Password Home Page"}
                        projectTitle={"Password Generator"}
                        projectDescription={"Generates passwords based on user criteria."}
                        imgLink={"https://gerardo-s.github.io/password-generator/"}
                        repoLink={"https://github.com/Gerardo-S/password-generator"}
                        techList={"HTML, CSS"}
                    />


                </div>

                

            </main>
        </div>

    )
};

export default Portfolio;