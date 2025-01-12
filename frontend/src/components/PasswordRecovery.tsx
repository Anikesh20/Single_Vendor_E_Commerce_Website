import React, { Dispatch, SetStateAction } from "react";

interface Props {
  setPage: Dispatch<SetStateAction<"login" | "signup" | "recovery">>;
}

const PasswordRecovery: React.FC<Props> = ({ setPage }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Password Recovery</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-300"
            placeholder="Enter your email to recover"
          />
        </div>
        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
          Recover Password
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4 text-center">
        Remembered your password?{" "}
        <span
          onClick={() => setPage("login")}
          className="text-red-500 hover:underline cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default PasswordRecovery;
