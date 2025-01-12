import React, { SetStateAction, useState } from "react";

interface Props {
  setPage: React.Dispatch<SetStateAction<"login" | "signup" | "recovery">>;
}

const Login: React.FC<Props> = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");  // Handle login success
      } else {
        setErrorMessage(data.message || "Something went wrong!");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
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