import React from "react";
import { useFormik } from "formik";
import { RegisteratonSchema } from "../Schema/index";
import { ToastContainer } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import NavBar from "./NavBar";
import { collection, addDoc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { db,auth } from '../firebase'
const Signup = () => {
  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: "",
        showPassword: true,
      },
      validationSchema: RegisteratonSchema,
      onSubmit: async (values) => {
        try {
          const res = await createUserWithEmailAndPassword(auth, values.email, values.password);
          const user = res.user;
          await addDoc(collection(db, "user"), {
            uid: user.uid,
            name: values.first_name + '' + values.last_name,
            authProvider: "local",
            email: values.email,
          });
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      },
    });

  return (
    <div>
      <ToastContainer />
            <div className="flex flex-col  items-center w-full mt-10">
        <form method="post" className="signup shadow-xl border-1 w-2/3">
          <h1 className="text-3xl text-dark">
            Signup our app
          </h1>

          <div className="flex flex-col items-start w-full">
            <input
              id="first_name"
              type="first_name"
              value={values.first_name}
              onChange={handleChange("first_name")}
              placeholder="First name"
            />
            {errors.first_name && touched.first_name ? (
              <p className="text-red-600 p-2 font-semibold">
                {errors.first_name}
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <input
              id="last_name"
              type="last_name"
              value={values.last_name}
              onChange={handleChange("last_name")}
              placeholder="Last name"
            />
            {errors.last_name && touched.last_name ? (
              <p className="text-red-600 p-2 font-semibold">
                {errors.last_name}
              </p>
            ) : (
              <p></p>
            )}
          </div>

          <div className="flex flex-col items-start w-full">
            <input
              id="mobile"
              type="mobile"
              value={values.mobile}
              onChange={handleChange("mobile")}
              placeholder="mobile"
            />
            {errors.mobile && touched.mobile ? (
              <p className="text-red-600 p-2 font-semibold">
                {errors.mobile}
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              placeholder="email"
            />
            {errors.email && touched.email ? (
              <p className="text-red-600 p-2 font-semibold">
                {errors.email}
              </p>
            ) : (
              <p></p>
            )}
          </div>

          <div className="flex flex-col items-start w-full">
            <input
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
          <div className="flex flex-col items-start w-full">
            <input
              id="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              placeholder="confirm Password"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="text-red-600 p-2 font-semibold">
                {errors.confirmPassword}
              </p>
            ) : (
              <p></p>
            )}
          </div>


          <div className="flex flex-col w-full space-y-4 px-2">
            <span className="link ml-auto">
              I already have an account?
              <a
                className="text-blue-700 ml-auto hover:underline hover:text-blue-800"
                href="/signin"
              >
                login
              </a>
            </span>

            <button className="submit-button" type="submit" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Signup;
