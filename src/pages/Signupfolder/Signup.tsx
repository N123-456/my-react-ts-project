import { TextInput } from "@mantine/core";
import React, { useState } from "react";

interface signUpCredentials {
  name: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const [credentials, setCredentials] = useState<signUpCredentials>({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setCredentials({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="flex px-10 text text-3xl py-5 mb-3">
        <h1>Sign-Up</h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-70  mx-auto">
        <div className="mb-4">
          <TextInput
            label="Input label"
            description="Input description"
            placeholder="Input placeholder"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black px-10 text-sm  mb-2 text-2xl">
            Email
          </label>
          <input
            className="border rounded w-56 py-2 px-4 text-gray-700"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black px-10 mb-2 text-2xl">
            Password
          </label>
          <input
            className="shadow border rounded w-56 py-2 px-3 text-gray-700"
            type="password"
            id="inputPassword5"
            name="password"
            value={credentials.password}
          />
        </div>
        <div className="mb-4">
          <button className="bg-pink-400 hover:bg-pink-100 text-white font-bold py-2 px-11 rounded ">
            Create Account
          </button>
        </div>
        <div className="mb-4">
          <p className=" text-inherit py-2 px-13 ">Forgot Password?</p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
