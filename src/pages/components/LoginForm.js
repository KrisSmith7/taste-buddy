import React from "react";


function LoginForm () {
    return (
        <>
        <form id="login" className="bg-brightorange flex flex-col items-center rounded-lg p-4 w-full">
            <h1 className="py-4">Welcome</h1>
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
            <button className='mt-4 w-5/6 p-4 uppercase bg-gray-100 rounded-md' type='submit'>
            Login
            </button>
        </form>
    </>
    );
};

export default LoginForm;