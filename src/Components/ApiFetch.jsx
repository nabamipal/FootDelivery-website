import React, { useState } from "react";

function ApiFetch() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-800">
          SIGN UP
        </h1>
        <p className="text-blue-400 text-center mb-2">
          Please fill in this form to create an account
        </p>

        <div className="mb-2">
          <label
            htmlFor="firstName"
            className="block text-medium font-medium text-gray-800 mb-1"
          >
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-blue-50 border  focus:ring-2 focus:ring-blue-500 rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="lastName"
            className="block text-medium font-medium text-gray-800 mb-1"
          >
            <b>LastName</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your Last Name"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-blue-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-medium font-mediumtext-gray-800 mb-1"
          >
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email no"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-blue-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="phone"
            className="block text-medium font-mediumtext-gray-800 mb-1"
          >
            <b>Phone No:</b>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone no"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-blue-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-medium font-mediumtext-gray-800 mb-1"
          >
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter the password"
            required
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-blue-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <p className="text-sm text-gray-700 mb-6">
          By creating an account you agree to our
          <a href="#" className="text-blue-600 underline">
            Terms & privacy
          </a>
        </p>
        <button className="w-full py-2 bg-blue-800 rounded-sm border text-white shadow-amber-500 hover:bg-blue-400  ease-in-out transition duration-300 ">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default ApiFetch;
