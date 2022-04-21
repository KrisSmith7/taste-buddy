import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Switch from "./components/Switch";
import Landing from "./Landing";

function SignIn(close) {

    const [showAuth, setShowAuth] = useState(true);
    const handleClose = () => setShowAuth(false)

    const [toggleAuth, setToggle] = useState(false);
    const handleToggle = () => setToggle(value => !value)

    // if (!showAuth) {
    //     return (<Landing />)
    // }


    return (
        <div className="">
            <div className="py-4 flex justify-center">
                <Switch
                    isOn={toggleAuth}
                    onColor={toggleAuth ? '#D81E5B' : '#F0544F'}
                    content={toggleAuth ? '< Login' : 'Sign Up >'}
                    handleToggle={() => handleToggle(!toggleAuth)}
                    />
            </div>
          
            <div>
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