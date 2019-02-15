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
        character: character, 
        clicked : [],
    };

    click = (id) => {
        
        console.log(id);
        let clickedArray = this.state.clicked;

        if (clickedArray.length === 0) {
            clickedArray.push(id);
            this.setState({clicked: clickedArray});
            this.setState({score: this.state.score + 1});
        }  

        else {
            var chosen = false;

            for (var i = 0; i < clickedArray.length; i++) {
                
                if (clickedArray[i] === id) {
                    chosen = true;
                }

            };
                if (chosen === false) {
                    clickedArray.push(id);
                    this.setState({score: this.state.score + 1});
                    this.setState({clicked: clickedArray})
                }

                else {
                    this.setState({score: 0})
                }
        }
        
    };

    componentDidMount(){
        console.log(this.state.clicked.length)
    };

    componentDidUpdate(){
        console.log(this.state.clicked)
    };

    render() {
       
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
                        <Picblock
                            image={person.image}
                            name={person.name}
                            id = {person.id}
                            click={this.click}
                        />
                    )}
                </div>
            </div>
        );

    }
};

export default Game;