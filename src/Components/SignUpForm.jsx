import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  /* SELECT INPUT _____________________________ */
  function handleClick() {
    document.getElementById("firstName").click();
  }
  return (
    <div className="flex items-center justify-center pb-20 ">
      <form
        onSubmit={handleSubmit}
        className="grid-cols-2 grid-rows-5 gap-8 md:grid"
      >
        <p className="col-start-1 col-end-3">Let's Do This!</p>
        <div className="form-group" onClick={handleClick}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button
          className="h-10 mt-4 text-black transition duration-200 rounded-lg shadow-md w-52 bg-cyan-200 hover:scale-105 "
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
