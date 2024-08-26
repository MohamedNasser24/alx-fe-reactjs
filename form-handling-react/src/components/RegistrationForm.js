import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      username: '',
      email: '',
      password: '',
    };

    // Basic validation
    if (!formValues.username) newErrors.username = 'Username is required';
    if (!formValues.email) newErrors.email = 'Email is required';
    if (!formValues.password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    // If there are no errors, handle form submission (mock API call)
    if (!newErrors.username && !newErrors.email && !newErrors.password) {
      console.log('Form submitted:', formValues);
      // Mock API call
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        {errors.username && <div>{errors.username}</div>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <div>{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {errors.password && <div>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;