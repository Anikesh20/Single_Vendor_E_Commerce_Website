import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  setPage: Dispatch<SetStateAction<"login" | "signup" | "recovery">>;
}

const Password: React.FC<Props> = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/recovery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Password recovery link sent to your email.");
        setErrorMessage("");
      } else {
        setErrorMessage(data.message || "Something went wrong!");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Password Recovery</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-300"
            placeholder="Enter your email to recover"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
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

export default Password;