import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import Logo from "../assets/logo.png";
import SlideTabs from "./Slidetab";

function Navbar() {
  const [user, setUser] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="fixed  stop-0 left-0 right-0 z-50 bg-gray-800 px-4 py-4 shadow-lg md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Logo"
            className="h-8 w-auto transition-transform hover:scale-105 md:h-10"
          />
          {user && (
            <p className="hidden text-lg font-bold text-white md:block md:text-xl">
              {user.displayName || user.email || "User"}
            </p>
          )}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link
              to="/"
              className="text-white transition-colors hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          {user && (
            <li>
              <Link
                to="/fav"
                className="text-white transition-colors hover:text-blue-400"
              >
                Favorites
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/resources"
              className="text-white transition-colors hover:text-blue-400"
            >
              Resources
            </Link>
          </li>
          <li>
            <button
              onClick={() => setIsSlideOpen((prev) => !prev)}
              className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white 
                                     transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
            >
              Services
            </button>
          </li>
          {user ? (
            <li>
              <button
                onClick={handleLogout}
                className={`rounded-lg px-4 py-2 font-medium transition-colors duration-300
                                         ${
                                           isHover
                                             ? "bg-red-600 text-white"
                                             : "bg-transparent text-white hover:text-red-400"
                                         }`}
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white 
                                               transition-all duration-300 hover:bg-blue-600"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="rounded-lg border-2 border-blue-500 px-4 py-2 font-medium 
                                               text-white transition-all duration-300 hover:bg-blue-500"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <ul className="mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4">
              <li>
                <Link
                  to="/"
                  className="block text-white transition-colors hover:text-blue-400"
                >
                  Home
                </Link>
              </li>
              {user && (
                <li>
                  <Link
                    to="/fav"
                    className="block text-white transition-colors hover:text-blue-400"
                  >
                    Favorites
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/resources"
                  className="block text-white transition-colors hover:text-blue-400"
                >
                  Resources
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsSlideOpen((prev) => !prev)}
                  className="w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white 
                                             transition-all duration-300 hover:bg-blue-600"
                >
                  Services
                </button>
              </li>
              {user ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full rounded-lg bg-transparent px-4 py-2 font-medium text-white 
                                                 transition-colors duration-300 hover:bg-red-600"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block w-full rounded-lg bg-blue-500 px-4 py-2 text-center 
                                                       font-medium text-white transition-all duration-300 hover:bg-blue-600"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="block w-full rounded-lg border-2 border-blue-500 px-4 py-2 
                                                       text-center font-medium text-white transition-all duration-300 hover:bg-blue-500"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSlideOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute right-4 top-16 rounded-lg bg-white shadow-xl"
          >
            <SlideTabs
              isSlideOpen={isSlideOpen}
              onClose={() => setIsSlideOpen(false)} // Add this prop
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
