import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUpWithEmailAndPassword } from '../../firebase';
import { Loader } from '../Loader';

export const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) return alert('Passwords do not match!');
        setIsLoading(true);
        await signUpWithEmailAndPassword(formData.email, formData.password).then((user) => {
            alert(`User ${user.user.email} has been created successfully!`);
        }).catch((error) => {
            alert(error.message);
        });
        setIsLoading(false);
    };

    return (
        <div className="w-1/3 mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
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
                <div className="mb-4">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                {
                    isLoading ?
                        <Loader />
                        :
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            disabled
                        >
                            Sign Up
                        </button>
                }
            </form>
            <p className="mt-4 text-center">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                    LOGIN
                </Link>
            </p>
        </div>
    );
};