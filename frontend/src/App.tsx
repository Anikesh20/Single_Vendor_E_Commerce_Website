import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Password from "./components/Password";

const App: React.FC = () => {
  const [page, setPage] = useState<"login" | "signup" | "recovery">("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
     {page === "recovery" && <Password setPage={setPage} />} 
    </div>
  );
};

export default App;