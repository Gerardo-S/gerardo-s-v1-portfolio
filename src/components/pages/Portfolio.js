import React from "react";
import DevourThatBurger from "../../utils/images/Portfolio/DevourThatBurger.gif";
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
                            <a href="https://infinite-plains-30611.herokuapp.com/">
                                <img src={GameKiwi} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Game-Kiwi-App" />Game Kiwi
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://destroy-da-burger.herokuapp.com/" target="_blank">
                                <img src={DevourThatBurger} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Eat-Da-Burger" />Eat-Da-Burger
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://babydylan.github.io/recipe-roulette/" target="_blank">
                                <img src={RecipeRoulette} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Recipe Roulette" />Recipe-Roulette
                            </a>
                        </div>

                    </div>

                    <div className="row bg-light m-3 row-cols">


                        <div className="col-md-4 p-1">
                            <a href="https://Gerardo-S.github.io/employee-directory " target="_blank">
                                <img src={HarryPotterDirectory} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Harry Potter Directory" />Harry Potter Directory
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://tracking-that-budget.herokuapp.com/" target="_blank">
                                <img src={TrackThatBudget} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="placeholder" />Track Your Budget
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://fitness-on-point.herokuapp.com/" target="_blank">
                                <img src={FitnessTracker} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="placeholder" />Fitness Tracker
                            </a>
                        </div>
                    </div>

                    <div className="row bg-light m-3 ">
                        <div className="col-md-4 p-1">
                            <a href="https://github.com/Gerardo-S/team-profile-generator" target="_blank">
                                <img src={GeneratedTeam} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="placeholder" />Team Generator Using Node CLI
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://gerardo-s.github.io/5-Day_Forecast/" target="_blank">
                                <img src={WeatherDashboard} className="img-fluid img-thumbnail" style={{ width: 360, height: 360 }} alt="placeholder" />Weather-Dashboard
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://gerardo-s.github.io/password-generator/" target="_blank">
                                <img src={GeneratedPassword} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="Password Generator" />Password Generator
                            </a>
                        </div>


                    </div>

                    <div className="row bg-light m-3">
                        <div className="col-md-4 p-1">
                            <a href="https://github.com/Gerardo-S/README-Generator" target="_blank">
                                <img src={ReadMeGenerator} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt="placeholder" />ReadMe Generator using Inquirer
                            </a>
                        </div>

                        {/* <div className="col-md-4 p-1">
                            <a href="https://placeholder.com">
                                <img src="http://via.placeholder.com/350" className="img-fluid img-thumbnail" alt="placeholder" />
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://placeholder.com">
                                <img src="http://via.placeholder.com/350" className="img-fluid img-thumbnail" alt="placeholder" />
                            </a>
                        </div> */}

                    </div>
                    <br />
                    <br/>
                </div>
              
            </main>
        </div>

    )
};

export default Portfolio;