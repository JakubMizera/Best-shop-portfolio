import React from "react";

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <nav className="navigation">
                    <span className="logo">BestShop</span>
                    <button className="hamburger" id="hamburger">
                        <div className="bar"/>
                        <div className="bar"/>
                        <div className="bar"/>
                    </button>
                    <ul className="nav-ul">
                        <li><a href="#">WHY US</a></li>
                        <li><a href="#">BENEFITS</a></li>
                        <li><a href="#">PRICES</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
document.addEventListener("DOMContentLoaded", (event) => {

    const hamburgerElem = document.getElementById("hamburger");
    console.log(hamburgerElem);
    const navElem = document.querySelector(".nav-ul");
    console.log(navElem);

    hamburgerElem.addEventListener("click", () => {
        navElem.classList.toggle("show");
    })
})

export {Header};