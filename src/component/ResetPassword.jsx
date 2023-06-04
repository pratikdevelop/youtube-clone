import React, { useState } from 'react'
import NavBar  from './NavBar';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase';
import { Toast, ToastContainer } from 'react-toastify';
import {NavLink} from 'react-router-dom';
const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const onSubmit = async () => {
        try {
            const response = await sendPasswordResetEmail(auth, email);
            alert("Password reset link sent!");

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

return (
    <div>
        <ToastContainer />
        <div className="flex flex-col  items-center w-full mt-20">
            <form method="post" className="signup w-1/3 space-y-8">
                <h1 className="heading">
                    Reset Password
                </h1>

                <div className="flex flex-col items-start w-full">
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder=" Enter your email"
                    />
                </div>

                <button className="submit-button border-indigo-600" onClick={onSubmit}>
                send email
              </button>
              <span className="text-xl font-semibold text-center text-dark">
                Back to ?
                <NavLink
                  className="text-blue-700 mr-1 hover:underline hover:text-blue-800"
                  to="/signin"
                >
                  sign in 
                </NavLink>
              </span>

            </form>
        </div>
    </div>
);
}
export default ResetPassword;