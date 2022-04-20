import React, {useState} from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Landing from "./Landing";

function SignIn () {
        
    const [showAuth, setShowAuth] = useState (true);
    const handleClose = () => setShowAuth(false)

    if (!showAuth) {
        return (
            <Landing/>
        )
    }

    return (
        <div>
  <button onClick={handleClose}>&times;</button>
<LoginForm />
<SignUpForm />
        </div>
    )
}

export default SignIn;