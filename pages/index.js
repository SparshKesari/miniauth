import Link from "next/link";
import { Layout } from "../src/Components/Layout/Layout";
import { useAuthState } from "../src/Context/auth";

const IndexPage = () => {
  const { isAuthenticated, user } = useAuthState();
  return (
    <div className="font-semibold text-xl">
      {isAuthenticated?
      <p className="text-red-500">Welcome {user.name}!</p>:
      <h2 className="">Do you want to <span className="text-blue-500"><Link href="/auth/login">sign in</Link></span> or <span className="text-blue-500"><Link href="/auth/register">register</Link></span></h2>}
    </div>
  );
};

IndexPage.layout = Layout;

export default IndexPage;
