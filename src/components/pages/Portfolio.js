import React from "react";
// import DevourThatBurger from "src/utils/images/Portfolio/DevourThatBurger.gif";

// import GameKiwi from "../../utils/images/portfolio/GameKiwi.png";
// import GeneratedPassword from "../../utils/images/portfolio/GeneratedPassword.png";
import RecipeRoulette from "../../utils/images/portfolio/RecipeRoulette.png";
// import WeatherDashboard from "../../utils/images/portfolio/WeatherDashboard.png";
function Portfolio(){
    return (
        <div className="container "> 
            <main className="row mt-3 mb-3 border-bottom -info">
                <div className="col-md-6">
                    <h1>Portfolio</h1>
                </div>  

                <div className="row-md-12 border border-dark p-0 m-0">
                    <div className="row bg-light m-3 row-cols">
                        <div className="col-md-4 p-1">
                            <a href="https://babydylan.github.io/recipe-roulette/" target="_blank">
                                <img src="PortfolioAssets\images\Portfolio\Recipe-Roulette.PNG" className="img-fluid img-thumbnail" style={{height: 360, objectFit: 'contain'}} alt="Recipe Roulette" />Recipe-Roulette
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://gerardo-s.github.io/5-Day_Forecast/" target="_blank">
                                <img src="PortfolioAssets\images\Portfolio\Weather-Dashboard.PNG" className="img-fluid img-thumbnail" style={{width: 360, height: 360}} alt="placeholder" />Weather-Dashboard
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://gerardo-s.github.io/password-generator/" target="_blank">
                                <img src="PortfolioAssets\images\320x350_password_generator.PNG" className="img-fluid img-thumbnail" style={{height: 360, objectFit: 'contain'}} alt="Password Generator" />Password Generator
                            </a>
                        </div>

                    </div>

                    <div className="row bg-light m-3 ">
                        <div className="col-md-4 p-1">
                            <a href="https://destroy-da-burger.herokuapp.com/" target="_blank">
                                <img src="PortfolioAssets\images\Portfolio\Devour-That-Burger.gif" className="img-fluid img-thumbnail" style={{height: 360, objectFit: 'contain'}} alt="Eat-Da-Burger" />Eat-Da-Burger
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://infinite-plains-30611.herokuapp.com/">
                                <img src="PortfolioAssets\images\Portfolio\game-kiwi.PNG" className="img-fluid img-thumbnail" style={{height: 360, objectFit: 'contain'}} alt="Game-Kiwi-App" />Game Kiwi
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://placeholder.com">
                                <img src="http://via.placeholder.com/350" className="img-fluid img-thumbnail" alt="placeholder" />
                            </a>
                        </div>

                    </div>

                    <div className="row bg-light m-3">
                        <div className="col-md-4 p-1">
                            <a href="https://placeholder.com">
                                <img src="http://via.placeholder.com/350" className="img-fluid img-thumbnail" alt="placeholder" />
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://placeholder.com">
                                <img src="http://via.placeholder.com/350" className="img-fluid img-thumbnail" alt="placeholder" />
                            </a>
                        </div>

                        <div className="col-md-4 p-1">
                            <a href="https://placeholder.com">
                                <img src="http://via.placeholder.com/350" className="img-fluid img-thumbnail" alt="placeholder" />
                            </a>
                        </div>

                    </div>      
                </div>
            </main>
        </div>

    )
};

export default Portfolio;