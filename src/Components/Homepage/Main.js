import React, { Component } from "react";
import Header from "../Header";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
    apiKey: "AIzaSyCboc020iBf36hc1CeOt5Uf3r5aawnz5vI",
    authDomain: "itec-2018-343d8.firebaseapp.com"
});
class Main extends Component {
    state = {
        isSingedIn: false
    };
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user });
            console.log("user", user);
        });
    };

    navMenu = () => {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    render() {
        return (
            <div>
                {this.state.isSignedIn ? (
                    <div>
                        <Header>
                            <div className="topnav" id="myTopnav">
                                <div className="logo">QuizMe!</div>
                                <a
                                    href="javascript:void(0);"
                                    className="icon"
                                    style={{ float: "right" }}
                                    onClick={this.navMenu}
                                >
                                    <div className="hamburger" />
                                    <div className="hamburger" />
                                    <div className="hamburger" />
                                </a>
                                <div className="buttons">
                                    <a style={{ display: "none" }} />
                                    <a className="userName">
                                        {
                                            firebase.auth().currentUser
                                                .displayName
                                        }
                                    </a>
                                    <a className="hover" href="#">
                                        Events
                                    </a>
                                    <a className="hover" href="#news">
                                        Quiz
                                    </a>

                                    <a
                                        className="hover"
                                        onClick={() =>
                                            firebase.auth().signOut()
                                        }
                                    >
                                        Sign out!
                                    </a>
                                </div>
                            </div>
                        </Header>
                    </div>
                ) : (
                    <div className="bg">
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Main;
