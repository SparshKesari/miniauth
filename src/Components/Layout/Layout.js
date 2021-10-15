import Link from "next/link";
import { useAuthDispatch, useAuthState } from "../../Context/auth";

const Layout = ({ children }) => {
  const { isAuthenticated, user } = useAuthState();
  const { logout } = useAuthDispatch();
  return (
    <>
      <header className="bg-white py-6 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 flex gap-4 font-semibold text-xl">
          <Link href="/">
            <a>Home</a>
          </Link>
          {isAuthenticated ? (
            <>
              <h1>{`Hello ${user.name}`}</h1>
              <button onClick={() => logout()} className="text-xl font-semibold">{"LogOut"}</button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <a>Login</a>
              </Link>
              <Link href="/auth/register">
                <a>Register</a>
              </Link>
            </>
          )}
        </div>
      </header>
      <div className="max-w-4xl mx-auto p-6 bg-gray-100">{children}</div>
      <footer className='max-w-4xl mx-auto p-6'>
        <div className='border-t pt-6 text-center text-sm text-gray-600'>
          &copy; Auth Example &mdash; 0.1.0 &mdash; Built by{' '}
          <a href='https://github.com/SparshKesari' target='_blank'>
            @sparshkesari
          </a>
        </div>
      </footer>
    </>
  );
};

export { Layout };
