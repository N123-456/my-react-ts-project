import React,{useState} from "react";

interface loginCredentials {

  email:string;
  password: string;
}
const login = () => {
  const [credentials, setCredentials] = useState<loginCredentials>({
    email: "",
    password: "",
  });
const handleChange = (e: { target: { value: any; name: any } }) => {
  const { value, name } = e.target;
};
const handleSubmit = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  setCredentials({
    email: "",
    password: "",
  });
  return <div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
<input type="email" id="inputPassword5" name="email" value={credentials.email} />

        </div>
        <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
<input type="password" id="inputPassword5" name="password" value={credentials.password} />
  </div>;
  </div>
}}

export default login;
