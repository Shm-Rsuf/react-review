import React, { useState } from "react";
import "./form.module.css";

export default function FORM() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleNameChang = (e) => {
    setUser({ name: e.target.value, email, password });
  };

  const handleEmailChang = (e) => {
    setUser({ name, email: e.target.value, password });
  };

  const handlePasswordChang = (e) => {
    setUser({ name, email, password: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h2>register</h2>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChang}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChang}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChang}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
