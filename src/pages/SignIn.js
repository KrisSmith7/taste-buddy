import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Switch from "./components/Switch";
import Landing from "./Landing";

function SignIn() {

    const [showAuth, setShowAuth] = useState(true);
    const handleClose = () => setShowAuth(false)

    const [toggleAuth, setToggle] = useState(false);
    const handleToggle = () => setToggle(value => !value)

    if (!showAuth) {
        return (<Landing />)
    }


    return (
        <div className="bg-gray-50 my-8 px-2">
            <div className="flex justify-between py-4">

                <Switch
                    isOn={toggleAuth}
                    onColor={toggleAuth ? '#D81E5B' : '#F0544F'}
                    content={toggleAuth ? '< Login' : 'Sign Up >'}
                    handleToggle={() => handleToggle(!toggleAuth)}
                />

                <button onClick={handleClose}>
                    <span className="text-4xl font-bold text-rubyred">&times;</span>
                </button>
            </div>
            <div className="pb-6">
                {!toggleAuth && (
                    <LoginForm />
                )}

                {toggleAuth && (
                    <SignUpForm />)}
            </div>
        </div>
    )
}

export default SignIn;