import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginsignup.css';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function LoginSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();  // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
                setSuccessMessage('Account created successfully!');
                navigate('/');  
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log('User signed in:', userCredential.user);
                setSuccessMessage('Signed in successfully!');
                navigate('/mainpage');  
            }
        } catch (error) {
            let message = 'An error occurred. Please try again.';
            if (error.code === 'auth/invalid-email') {
                message = 'Invalid email address.';
            } else if (error.code === 'auth/user-not-found') {
                message = 'No user found with this email.';
            } else if (error.code === 'auth/wrong-password') {
                message = 'Incorrect password.';
            } else if (error.code === 'auth/email-already-in-use') {
                message = 'Email is already in use.';
            }
            setErrorMessage(message);
        }
    };

    return (
        <div className="flex w-full h-screen">
            <section className="flex-1 bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-900 justify-center items-center">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                {isSignUp ? 'Create an account' : 'Sign in to your account'}
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@xyz.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-green-800"
                                >
                                    {isSignUp ? 'Create an account' : 'Sign in'}
                                </button>
                                {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}
                                {successMessage && <div className="text-green-500 text-center">{successMessage}</div>}
                            </form>
                            <button
                                onClick={() => setIsSignUp(!isSignUp)}
                                className="mt-4 text-blue-500 hover:text-blue-700"
                            >
                                {isSignUp ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginSignup;
