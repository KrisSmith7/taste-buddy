import React from "react";

function SignUpForm () {
    return (
        <>
        <form id="signup" className="bg-rubyred flex flex-col items-center p-4 w-full">
            <h1 className="py-2">Sign Up</h1>
            <input
                className='form-input'
                placeholder='Enter your email'
                name='email'
                type='input'
                id='signupemail'
            />
            <input
                className='form-input'
                placeholder='Create a username'
                name='username'
                type='input'
                id='newusername'
            />
            <input
                className='form-input'
                placeholder='Create a password'
                name='password'
                type='password'
                id='newpassword'
            />
            <button className='w-50 m-5 text-lg w-1/2' type='submit'>
               Submit
            </button>
        </form>
    </>
    );
};

export default SignUpForm;