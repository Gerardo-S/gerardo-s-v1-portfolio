import React from "react";
import DevourThatBurger from "../../utils/images/Portfolio/DevourThatBurger.gif";
import PlantAhead from "../../utils/images/Portfolio/PlantAhead.PNG"
import GameKiwi from "../../utils/images/Portfolio/GameKiwi.PNG";
import GeneratedPassword from "../../utils/images/Portfolio/GeneratedPassword.PNG";
import RecipeRoulette from "../../utils/images/Portfolio/RecipeRoulette.PNG";
import WeatherDashboard from "../../utils/images/Portfolio/WeatherDashboard.PNG";
import HarryPotterDirectory from "../../utils/images/Portfolio/HarryPotterDirectory.gif";
import TrackThatBudget from "../../utils/images/Portfolio/TrackThatBudget.gif";
import FitnessTracker from "../../utils/images/Portfolio/FitnessTracker.gif";
import GeneratedTeam from "../../utils/images/Portfolio/GeneratedTeam.PNG";
import ReadMeGenerator from "../../utils/images/Portfolio/ReadMeGenerator.gif";
function Portfolio() {
    return (

        <div className="container " >
            <main className="row mt-3 mb-3 border-bottom -info ">
                <div className="col-md-6 ">
                    <h1>Portfolio</h1>
                </div>

                <div className=" row-md-12 border border-dark p-0 m-0 ">

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
                            <a href="https://Gerardo-S.github.io/employee-directory" rel="noreferrer" target="_blank">
                                <img src={HarryPotterDirectory} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Harry Potter Directory" />
                            </a>
                            View Repo:<a href="https://github.com/Gerardo-S/employee-directory" rel="noreferrer" target="_blank"> Harry Potter Directory</a>
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

                        <div className="col-md-4 p-1">
                            <a href="https://github.com/Gerardo-S/README-Generator" rel="noreferrer" target="_blank">
                                <img src={ReadMeGenerator} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="placeholder" />
                            </a>
                            View Repo:<a href="https://github.com/Gerardo-S/README-Generator" rel="noreferrer" target="_blank"> ReadMe Generator With Inquirer</a>
                        </div>

                        {/* <div className="col-md-4 p-1">
                            <a href="https://placeholder.com">
                                <img src="http://via.placeholder.com/350" className="img-fluid img-thumbnail" alt="placeholder" />
                            </a>
                        </div> */}

                    </div>
                    <br />
                    <br />
                </div>

            </main>
        </div>

    )
};

export default Portfolio;