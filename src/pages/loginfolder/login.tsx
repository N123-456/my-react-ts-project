import { Center, PasswordInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { Button } from '@mantine/core';
interface loginCredentials {
  email: string;
  password: string;
}
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex align-center justify-center">
      <div className="flex flex-col w-[100%]">
        <Center className="flex flex-col">
          <div className="w-[25%] py-4 text-xl focus:border-black-200 ">
            <TextInput
              label="Email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="w-[25%] py-4 text-xl focus:border-black-200">
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="w-20 ">
          <Button variant="filled">Button</Button>;
          </div>
        </Center>
      </div>
    </div>
  );
};

export default LoginPage;
