import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInAuthUserWithEmailAndPassword } from '../../firebase';
import { Loader } from '../Loader';

export const LogIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await signInAuthUserWithEmailAndPassword(formData.email, formData.password).then((user) => {
            alert(`User ${user.user.email} has been logged in successfully!`);
            navigate('/');
        }).catch((error) => {
            alert(error.message);
        });
        setIsLoading(false);
    };

    return (
        <div className="w-1/3 mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                {
                    isLoading ?
                        <Loader />
                        : <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Login
                        </button>
                }
            </form>
            <p className="mt-4 text-center">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500 hover:underline">
                    SIGNUP
                </Link>
            </p>
        </div>
    );
};
