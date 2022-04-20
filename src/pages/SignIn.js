import React, {useState} from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Landing from "./Landing";

function SignIn () {
        
    const [showAuth, setShowAuth] = useState (true);
    const handleClose = () => setShowAuth(false)

    const [toggleAuth, setToggle] = useState (false);
    const handleToggle = () => setToggle(state => !state)
 
    if (!showAuth) {
        return (
            <Landing/>
        )
    }
        //   if (toggleAuth) {
        //     console.log("sign in modal opened")
        //     return ( "switching...")
        //     }
      

    return (
        <div>
  <div className="flex justify-evenly">
      {" "}
      <div className="w-full h-12">
        <button onClick={ () => handleToggle(!toggleAuth)} className="appearance-none border-2 w-1/2 h-full checked:bg-brightorange/75" >

        </button>
      </div>
  <button onClick={handleClose}>&times;</button>
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