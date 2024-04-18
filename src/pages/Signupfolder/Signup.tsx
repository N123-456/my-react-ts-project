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
      <div className="flex justify-center item-center text-xl">
        <h1>Create An Account</h1>
      </div>
      <div className="flex justify-center item-center text-lg">
        <h2>
          Create an Account to enjoy all the services without any ads for free
        </h2>
      </div>

      <form onSubmit={handleSubmit}  className="max-w-md  mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="name"
            name="name"
            value={credentials.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="inputPassword5"
            name="password"
            value={credentials.password}
          />
        </div>
        <div className="mb-4"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded focus:outline-none focus:shadow-outline">Create Account</button></div>
      </form>
    </div>
  );
};

export default SignupPage;
