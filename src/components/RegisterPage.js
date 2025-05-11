import React from 'react';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <label>Plan Type:</label>
                    <select name="plan">
                        <option value="builder">Builder</option>
                        <option value="agency">Agency</option>
                        <option value="enterprise">Enterprise</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
