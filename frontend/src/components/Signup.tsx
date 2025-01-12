import React, { Dispatch, SetStateAction } from "react";

interface Props {
  setPage: Dispatch<SetStateAction<"login" | "signup" | "recovery">>;
}

const Signup: React.FC<Props> = ({ setPage }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Create a password"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Address</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Enter your address"
          />
        </div>
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
          Sign Up
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4 text-center">
        Already have an account?{" "}
        <span
          onClick={() => setPage("login")}
          className="text-purple-500 hover:underline cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
