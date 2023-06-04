import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../Schema/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";
// import {useAuthContext} from '../consumer/usercontext';
// import { createContext, useContext, useReducer } from "react";
// import reducer from './userReducer';
// // this imis the data leyer

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
const Login = () => {
  const nav = useNavigate()
  // const {signIn} = useAuthContext()
  const { values, errors, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",       
      },
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        const {email, password} = values;
        // signIn(values.email, values.password);
        try {
          const response = await signInWithEmailAndPassword(auth, email, password);
          localStorage.setItem('token',response.user.stsTokenManager.refreshToken);
          setTimeout(() => {
            nav('/')
          }, 2000);
          // dispatch({type:'signin', payload:response.user.stsTokenManager.refreshToken})
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      }
    });

  return (
    <>
      <ToastContainer />
        <div className="flex justify-center items-center  mt-10 w-full">
          <form method="post" className="signup shadow-xl border-1 w-3/6 space-y-4">
            <div className="text-xl sm:text-4xl font-serif mx-auto font-bold  text-dark">
              Login your account
            </div>

            <div className="flex flex-col items-start w-full">
              <input
              className="input"
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                placeholder="email"
              />
              {errors.email && touched.email ? (
                <p className="text-red-600 p-2 font-semibold">{errors.email}</p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <input
              className="input"
                type="password"
                value={values.password}
                onChange={handleChange("password")}
                placeholder="Password"
              />

              {errors.password && touched.password ? (
                <p className="text-red-600 p-2 font-semibold">
                  {errors.password}
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="flex flex-col w-full space-y-4 px-2">
            <NavLink
                  className=" text-blue-700 text-xl ml-auto hover:underline hover:text-blue-800"
                  to="/reset-password"
                >
                  Reset Your Password 
                </NavLink>
              <button className="submit-button border-indigo-600" onClick={handleSubmit}>
                sign in
              </button>
              <span className="text-xl font-semibold text-center text-dark">
                don't have any account?
                <NavLink
                  className="text-blue-700 mr-1 hover:underline hover:text-blue-800"
                  to="/signup"
                >
                  create account
                </NavLink>
              </span>
            </div>
          </form>
          
        </div>
    </>
  );
};

export default Login;
