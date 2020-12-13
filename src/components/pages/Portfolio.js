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

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5">
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
                    />
                    <Project
                        projectImg={GameKiwi}
                        imageAlt={"GameKiwi Home Page"}
                        projectTitle={"GameKiwi"}
                        projectDescription={"Allows users to create accounts and browse a large selection of video games." 
                        + " Members have the ability to save games to their top-ten list and share with other users."}
                        imgLink={"https://infinite-plains-30611.herokuapp.com/"}
                        repoLink={"https://github.com/Gerardo-S/bluetooth-coffee-cup"}
                    />

                    <Project
                        projectImg={DevourThatBurger}
                        imageAlt={"Eat Da Burger Home Page"}
                        projectTitle={"Devour That Burger"}
                        projectDescription={"Users inputs names of their favorite burgers." + 
                        " Each burger after submission is listed with a devour button which users click to devour burger."}
                        imgLink={"https://destroy-da-burger.herokuapp.com/"}
                        repoLink={"https://github.com/Gerardo-S/burger"}
                    />

                    <Project
                        projectImg={RecipeRoulette}
                        imageAlt={"Recipe Roulette Home Page"}
                        projectTitle={"Recipe Roulette"}
                        projectDescription={"Expand your recipe collection." +
                         " This app offers users the ability to search for new recipes and cuisines."}
                        imgLink={"https://babydylan.github.io/recipe-roulette/"}
                        repoLink={"https://github.com/babydylan/recipe-roulette"}
                    />

                    <Project
                        projectImg={ReadMeGenerator}
                        imageAlt={"ReadMe Generator Repo"}
                        projectTitle={"ReadMe Generator"}
                        projectDescription={"Allows users to create a ReadMe file" + 
                        " through a series of questions from the command line."}
                        imgLink={"https://github.com/Gerardo-S/README-Generator"}
                        repoLink={"https://github.com/Gerardo-S/README-Generator"}
                    />

                    <Project
                        projectImg={TrackThatBudget}
                        imageAlt={"Track That Budget Home Page"}
                        projectTitle={"Track Your Budget"}
                        projectDescription={"Functional budget tracker with offline accessability."}
                        imgLink={"https://tracking-that-budget.herokuapp.com/"}
                        repoLink={"https://github.com/Gerardo-S/track-your-budget"}
                    />

                    <Project
                        projectImg={FitnessTracker}
                        imageAlt={"Fitness Tracker Home Page"}
                        projectTitle={"Fitness Tracker"}
                        projectDescription={"An app that lets users track their workouts."}
                        imgLink={"https://fitness-on-point.herokuapp.com/"}
                        repoLink={"https://github.com/Gerardo-S/fitness-tracker"}
                    />

                    <Project
                        projectImg={GeneratedTeam}
                        imageAlt={"Team Generator Repo"}
                        projectTitle={"Team Generator"}
                        projectDescription={"An app that generates an HTML webpage displaying a Team member roster."}
                        imgLink={"https://github.com/Gerardo-S/team-profile-generator"}
                        repoLink={"https://github.com/Gerardo-S/team-profile-generator"}
                    />

                    <Project
                        projectImg={WeatherDashboard}
                        imageAlt={"Weather Dashboard Home Page"}
                        projectTitle={"Weather Dashboard"}
                        projectDescription={"Displays a live five day forecast from city of choice."}
                        imgLink={"https://gerardo-s.github.io/5-Day_Forecast/"}
                        repoLink={"https://github.com/Gerardo-S/5-Day_Forecast"}
                    />

                    <Project
                        projectImg={GeneratedPassword}
                        imageAlt={"Generate Password Home Page"}
                        projectTitle={"Password Generator"}
                        projectDescription={"Generates passwords based on user criteria."}
                        imgLink={"https://gerardo-s.github.io/password-generator/"}
                        repoLink={"https://github.com/Gerardo-S/password-generator"}
                    />


                </div>


                {/* ============================================ */}

                {/* <div className=" row-md-12 border border-dark p-0 m-0 ">

                    <div className="row bg-light m-3 row-cols ">
                        <div className="col-md-4 p-1">
                            <a href="https://plant-ahead.herokuapp.com/" rel="noreferrer" target="_blank">
                                <img src={PlantAhead} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Game-Kiwi-App" />
                            </a>
                            View Repo:<a href="https://github.com/Deftone1/plant-ahead" rel="noreferrer" target="_blank"> Plant Ahead</a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://infinite-plains-30611.herokuapp.com/" rel="noreferrer" target="_blank">
                                <img src={GameKiwi} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Game-Kiwi-App" />
                            </a>
                            View Repo:<a href="https://github.com/Gerardo-S/bluetooth-coffee-cup" rel="noreferrer" target="_blank"> Game Kiwi</a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://destroy-da-burger.herokuapp.com/" rel="noreferrer" target="_blank">
                                <img src={DevourThatBurger} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Eat-Da-Burger" />
                            </a>
                            View Repo:<a href="https://github.com/Gerardo-S/burger" rel="noreferrer" target="_blank"> Devour That Burger</a>
                        </div>

                    </div>

                    <div className="row bg-light m-3 row-cols">


                        <div className="col-md-4 p-1">
                            <a href="https://babydylan.github.io/recipe-roulette/" rel="noreferrer" target="_blank">
                                <img src={RecipeRoulette} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Recipe Roulette" />
                            </a>
                            View Repo:<a href="https://github.com/babydylan/recipe-roulette" rel="noreferrer" target="_blank"> Recipe Roulette</a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://github.com/Gerardo-S/README-Generator" rel="noreferrer" target="_blank">
                                <img src={ReadMeGenerator} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="placeholder" />
                            </a>
                            View Repo:<a href="https://github.com/Gerardo-S/README-Generator" rel="noreferrer" target="_blank"> ReadMe Generator With Inquirer</a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://tracking-that-budget.herokuapp.com/" rel="noreferrer" target="_blank">
                                <img src={TrackThatBudget} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="placeholder" />
                            </a>
                            View Repo:<a href="https://github.com/Gerardo-S/track-your-budget" rel="noreferrer" target="_blank"> Track Your Budget</a>
                        </div>
                    </div>

                    <div className="row bg-light m-3 ">
                        <div className="col-md-4 p-1">
                            <a href="https://fitness-on-point.herokuapp.com/" rel="noreferrer" target="_blank">
                                <img src={FitnessTracker} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="placeholder" />
                            </a>
                            View Repo:<a href="https://github.com/Gerardo-S/fitness-tracker" rel="noreferrer" target="_blank"> Fitness Tracker</a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://github.com/Gerardo-S/team-profile-generator" rel="noreferrer" target="_blank">
                                <img src={GeneratedTeam} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="placeholder" />
                            </a>
                            View Repo:<a href="https://github.com/Gerardo-S/team-profile-generator" rel="noreferrer" target="_blank"> Team Generator Using Node CLI</a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://gerardo-s.github.io/5-Day_Forecast/" rel="noreferrer" target="_blank">
                                <img src={WeatherDashboard} className="img-fluid img-thumbnail" style={{ width: 360, height: 360 }} alt="placeholder" />
                            </a>
                            View Repo:<a href="https://github.com/Gerardo-S/5-Day_Forecast" rel="noreferrer" target="_blank"> Weather-Dashboard</a>
                        </div>


                    </div>

                    <div className="row bg-light m-3">
                        <div className="col-md-4 p-1">
                            <a href="https://gerardo-s.github.io/password-generator/" rel="noreferrer" target="_blank">
                                <img src={GeneratedPassword} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Password Generator" />
                            </a>
                            View Repo:<a href="https://github.com/Gerardo-S/password-generator" rel="noreferrer" target="_blank"> Password Generator</a>
                        </div>                    

                    </div>
                    <br />
                    <br />
                </div> */}
                <br />
                <br />

            </main>
        </div>

    )
};

export default Portfolio;