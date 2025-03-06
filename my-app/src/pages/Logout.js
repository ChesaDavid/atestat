import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { displayName } from "../firebase";

const LogoutPage = () => {
  const navigate = useNavigate();
    console.log(displayName);
  useEffect(() => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("user");

    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col h-screen items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold">You have been logged out</h1>
      <p className="text-gray-600 mt-2">Redirecting to login...</p>
    </div>
  );
};

export default LogoutPage;
