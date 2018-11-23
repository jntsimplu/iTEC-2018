import React, { Component } from "react";
import Header from "../Header";

class Main extends Component {
    navMenu = () => {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };
    hamburger = x => {
        x.classList.toggle("change");
    };
    render() {
        return (
            <div>
                <Header>
                    <div className="logo">QuizMe!</div>
                    <div className="topnav" id="myTopnav">
                        <a href="#" className="active">
                            Events
                        </a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <a
                            href="javascript:void(0);"
                            className="icon"
                            onClick={this.navMenu}
                        >
                            <div className="hamburger" />
                            <div className="hamburger" />
                            <div className="hamburger" />
                        </a>
                    </div>
                </Header>
            </div>
        );
    }
}

export default Main;
