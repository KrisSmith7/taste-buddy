import React from "react";

function Landing() {
    return (
        <section className="h-screen w-screen feast-background">
            <div className="bg-gray-900 opacity-50 w-full h-full"></div>
            <div className="absolute top-48 bottom-48 flex flex-col justify-center align-items px-8 text-center text-white w-full">
                <h1 className="py-48 text-4xl">Taste Buddy</h1>
            <p className="py-4">Rank your favorites and never make the same mistake again!</p>
            <button className="bg-red-500 p-4 rounded-md">Get Started</button>
            </div>
        </section>
    );
}

export default Landing;