// src/FormValidation.js
import  { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsObj = {};
    // Basic validations (you can extend these as needed)
    if (!formData.name) {
      errorsObj.name = 'Name is required';
    }
    if (!formData.phone) {
      errorsObj.phone = 'Phone number is required';
    }
    if (!formData.email) {
      errorsObj.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorsObj.email = 'Invalid email format';
    }
    if (!formData.password) {
      errorsObj.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      errorsObj.confirmPassword = 'Passwords do not match';
    }
    setErrors(errorsObj);
    if (Object.keys(errorsObj).length === 0) {
      // Form is valid, you can submit data here
      console.log('Form data:', formData);
    }

    setFormData({
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Form Validation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full mt-1 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full mt-1 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full mt-1 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full mt-1 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="block w-full mt-1 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
