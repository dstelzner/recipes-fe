import React, { useState } from "react";
import "./UserForm.css";

const UserRole = {
  USER: "USER",
  CHEF: "CHEF",
};

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: UserRole.USER,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(`User "${formData.name}" registered successfully! (Simulated)`);

    setFormData({
      name: "",
      email: "",
      password: "",
      role: UserRole.USER,
    });
  };

  return (
    <div className="user-form-container">
      <h2 className="user-form-title">Register</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="name" className="user-form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="user-form-input"
        />

        <label htmlFor="email" className="user-form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="user-form-input"
        />

        <label htmlFor="password" className="user-form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="user-form-input"
        />

        <label htmlFor="role" className="user-form-label">
          Role:
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="user-form-select"
        >
          <option value={UserRole.USER}>User</option>
          <option value={UserRole.CHEF}>Chef</option>
        </select>

        <button type="submit" className="user-form-button">
          Create User
        </button>
      </form>
    </div>
  );
}

export default UserForm;
