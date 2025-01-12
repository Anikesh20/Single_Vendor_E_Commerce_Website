import React, { useState } from "react";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<"login" | "signup" | "recovery">>;
}

const Signup: React.FC<Props> = ({ setPage }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      fullName,
      email,
      password,
      phoneNumber,
      address,
      city,
      state,
      postalCode,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);  
        setPage("login");
      } else {
        setErrorMessage(result.message || "Something went wrong!");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-[480px] mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Address Line 1</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Address Line 2</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Enter your address line 2 (optional)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">City</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Enter your city"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">State</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
            placeholder="Enter your state"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}

      {/* <div className="mt-4 text-center">
        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
          Sign Up with Google
        </button>
      </div> */}

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