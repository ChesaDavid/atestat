import React, { useState } from "react";
import { auth, signInWithGoogle } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { HiMail, HiUser } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      await updateProfile(userCredential.user, { displayName: user.name });
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      setError("Could not sign in with Google");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700">
        <div className="space-y-4">
          <h2 className="mt-6 text-center text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Create Account
          </h2>
          <p className="text-center text-sm text-gray-400">
            Join us to start learning today
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                name="name"
                type="text"
                required
                className="pl-10 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Full name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="relative">
              <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                type="email"
                required
                className="pl-10 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Email address"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                name="password"
                type="password"
                required
                className="pl-10 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                name="confirmPassword"
                type="password"
                required
                className="pl-10 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Confirm password"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white 
              bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
              transform transition duration-200 hover:scale-[1.02]
              ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Creating account...' : 'Sign up'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800/50 text-gray-400">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="mt-4 w-full flex justify-center items-center gap-3 py-3 px-4 
            border border-gray-600 rounded-lg shadow-sm bg-gray-700/50 
            text-sm font-medium text-gray-200 
            hover:bg-gray-600/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transform transition duration-200 hover:scale-[1.02]"
          >
            <FcGoogle className="h-5 w-5" />
            Sign up with Google
          </button>
        </div>

        <div className="text-center mt-6">
          <span className="text-gray-400">Already have an account? </span>
          <button
            onClick={() => navigate('/login')}
            className="font-medium text-blue-400 hover:text-blue-300 transition duration-200"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;