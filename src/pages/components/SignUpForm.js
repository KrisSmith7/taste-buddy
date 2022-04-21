import React from "react";

function SignUpForm () {
    return (
        <>
        <form id="signup" className="bg-rubyred flex flex-col items-center rounded-lg p-4 w-full h-full">
            <h1 className="py-4">Create New Account</h1>
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
            <button className='mt-4 w-5/6 p-4 uppercase bg-gray-100 rounded-md' type='submit'>
               Submit
            </button>
        </form>
    </>
    );
};

export default SignUpForm;