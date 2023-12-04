import Layout from "../../Components/Layout";
import { useAuth } from "../../Context/auth";

const MyAccount = () => {
  const auth = useAuth();
  return (
    <Layout>
      <div className="flex flex-col gap-7 items-center justify-center relative mb-4">
        <h1 className="font-medium text-md sm:text-xl">My Account</h1>
        <p className="font-semibold text-2xl">
          Welcome, {auth.user.username.username}
        </p>
        {console.log("username: ", auth.user.username.username)}
        {console.log("password: ", auth.user.username.password)}
      </div>
    </Layout>
  );
};

export default MyAccount;
