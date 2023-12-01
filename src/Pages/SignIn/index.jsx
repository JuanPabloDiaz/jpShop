// import Layout from "../../Components/Layout";

// const SignIn = () => {
//   return (
//     <Layout>
//       <div className="flex items-center justify-center relative mb-4">
//         <h1 className="font-medium text-md sm:text-xl">Sign In</h1>
//       </div>
//     </Layout>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import Layout from "../../Components/Layout";

function SignIn({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("username", username);
  console.log("password", password);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
      </form>
    </Layout>
  );
}

export default SignIn;
