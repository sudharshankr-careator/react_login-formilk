import React from "react";
import "./Login.css";
import { useFormik } from "formik";
export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
