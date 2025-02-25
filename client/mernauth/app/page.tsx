import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-600 mb-4">
          Navigate through our authentication pages easily.
        </p>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                href="/auth/login"
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/auth/signup"
                className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                SignUp
              </Link>
            </li>
            <li>
              <Link
                href="/emailVerify"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Email Verify
              </Link>
            </li>
            <li>
              <Link
                href="/resetPassword"
                className="block w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Reset Password
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
