import React, { SetStateAction } from "react";

interface Props {
  setPage: React.Dispatch<SetStateAction<"login" | "signup" | "recovery">>;
}

const Login: React.FC<Props> = ({ setPage }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Login
        </button>
        <p
          onClick={() => setPage("recovery")}
          className="text-sm text-blue-500 hover:underline cursor-pointer text-center"
        >
          Forgot Password?
        </p>
      </form>
      <p className="text-sm text-gray-600 mt-4 text-center">
        Don't have an account?{" "}
        <span
          onClick={() => setPage("signup")}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
