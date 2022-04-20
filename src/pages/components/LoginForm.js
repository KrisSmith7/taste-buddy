import React from "react";


function LoginForm () {
    return (
        <>
        <form id="login" className="bg-brightorange flex flex-col items-center p-4 w-full">
            <h1 className="py-2">Login</h1>
            <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='input'
                id='username'
            />
            <input
                className='form-input'
                placeholder='Your password'
                name='password'
                type='password'
                id='password'
            />
            <button className='w-50 m-5 text-lg w-1/2' type='submit'>
               Submit
            </button>
        </form>
    </>
    );
};

export default LoginForm;