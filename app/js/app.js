import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";


import {Header} from "./elements/header";
import {Intro} from "./elements/intro";


const App = () => {
    return (
        <div className="pageContainer">
            <Header/>
            <Intro/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#page"));