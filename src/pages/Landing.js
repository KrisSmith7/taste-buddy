import React, {useState} from "react";
import Modal from "./components/Modal";
import SignIn from "./SignIn";


function Landing() {
    const [showAuth, setShowAuth] = useState (false);
    const handleShow = () => setShowAuth(true)
    const handleClose = () => setShowAuth(false)
 
    return (
        <>
      <Modal show={showAuth} handleClose={handleClose} children={<SignIn/>} />

        <section className="h-screen w-screen feast-background">
            <div className=" flex flex-col justify-center align-items px-8 text-center text-white w-full">
                <h1 className="py-48 text-4xl">Taste Buddy</h1>
            <p className="py-4">Rank your favorites and never make the same mistake again!</p>
            <button className="bg-rubyred p-4 rounded-md"
            onClick={handleShow}
            >Get Started</button>
            </div>
        </section>
        </>

);

}

export default Landing;