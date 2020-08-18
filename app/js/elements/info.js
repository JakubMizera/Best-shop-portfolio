import React from "react";

const Info = () => {
    return (
        <section className="info">
            <h2>The most popular sales platform in country</h2>
            <div className="infographContainer">
                <div className="box">
                    <div className="circle red">
                        <img src="../../images/Person.svg"/>
                    </div>
                    <span>100000+</span>
                    <p>daily entries</p>
                </div>
                <div className="box">
                    <div className="circle blue">
                        <img src="../../images/Eye.svg"/>
                    </div>
                    <span>200000+</span>
                    <p>seen products every day</p>
                </div>
                <div className="box">
                    <div className="circle green">
                        <img src="../../images/Catalog.svg"/>
                    </div>
                    <span>10000+</span>
                    <p>added post daily</p>
                </div>
            </div>
        </section>
    )
}

export {Info};