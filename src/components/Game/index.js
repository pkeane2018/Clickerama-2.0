import React, { Component } from "react";
import Navbar from "../Navbar";
import Picblock from "../Picblock";
import character from "../../characters.json";
import "./style.css";

class Game extends Component {
    state = {
        progess: "begin",
        score: 0,
        topScore: 0,
        character: { character }
    };

    render() {

        console.log(this.state.character);
        // const character = this.state.character;

        return (
            <div className="container">
                <Navbar />
                <div className="jumbotron">
                    <h1 className="display-4">Test your memory!</h1>
                    <p className="lead">Increase your score by clicking on each picture, for a maximum total score of twelve. But make sure not to click on any picture more than once. Good luck!</p>
                    <hr className="my-4" />
                    <p>Click on any picture to begin!</p>
                    <p>Score: {this.state.score}</p>
                    <p>Top Score: {this.state.topScore} </p>
                </div>
                <div className="Picblock">
                    {character.map((person) =>
                        <Picblock style
                            image={person.image}
                            name={person.name}
                        />
                    )}
                </div>
            </div>
        );

    }
};

export default Game;