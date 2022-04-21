import React from "react";

function MainPage () {
    return (
        <section className="bg-gray-100 h-screen">
            <header className="bg-white sticky top-0 p-2 w-full flex flex-col justify-evenly items-center md:flex-row md:justify-between">
                <div className="md:order-2 h-8 w-full border-b-2 md:border-0 md:w-1/2 md:text-right">Welcome, USER!</div>
                <div className="h-8 my-2 w-full">
                    <input placeholder="Search" className="w-full h-full text-center rounded-lg bg-gray-100 md:text-left md:w-1/2"/>
                    </div>
            </header>
            <div>
                <h1>Restaurants near me</h1>
            </div>
            
                    <div>rest 1</div>
                    <div>rest 2</div>
                    <div>rest 3</div>
        </section>
    );
};

export default MainPage;