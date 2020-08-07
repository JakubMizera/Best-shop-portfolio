import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";


import {Header} from "./elements/header";


const App = () => {
    return (
        <div className="pageContainer">
            <Header/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#page"));