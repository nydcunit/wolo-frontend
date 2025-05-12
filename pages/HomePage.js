import React from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
    const router = useRouter();
    
    const handleLogin = () => {
        router.push('/login');
    };

    const handleRegister = () => {
        router.push('/register');
    };

    return (
        <div>
            <h1>Welcome to WOLO App Builder</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default HomePage;
