import React, { useState } from "react";
import Layout from "../../Components/Layout";
import { useAuth } from "../../Context/auth";

function SignIn() {
  const auth = useAuth(); // console.log("auth: ", auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("username: ", username);
    // console.log("password: ", password);
    auth.login(username, password);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative mb-4">
        <h1 className="font-medium text-md sm:text-xl">Sign In</h1>
      </div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center items-center w-screen h-screen gap-5"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border border-gray-300 rounded-md px-2 py-1"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-gray-300 rounded-md px-2 py-1"
        />
        <button
          type="submit"
          className="w-48 bg-black text-white font-medium py-2 rounded-lg mt-2 hover:bg-gray-900/50 transition duration-300"
        >
          Sign In
        </button>
      </form>
    </Layout>
  );
}

export default SignIn;
