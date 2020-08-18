import React from "react";

const Intro = () => {
    return (
        <section className="intro">
            <div className="containerIntro">
                <h1>Sell More!</h1>
                <p>Open shop on our platform and increase your sales</p>
                <button className="btn">Open your shop</button>
                <div className="img-wrapper">
                    <img src="../../images/Background.png" className="bgImage"/>
                </div>
            </div>
        </section>
    )
}

export {Intro};