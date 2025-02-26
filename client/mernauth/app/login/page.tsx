"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import { assets } from "../assets/assets/assets";

export default function AuthPage() {
  const router = useRouter();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (state === "Sign Up") {
        // Registration API call
        const { data } = await axios.post(
          "http://localhost:4000/api/auth/register",
          { name, email, password },
          { withCredentials: true }
        );
        if (data.success) {
          toast.success("Account created successfully!");
          router.push("/");
        } else {
          toast.error(data.message || "Signup failed");
        }
      } else {
        // Login API call
        const { data } = await axios.post(
          "http://localhost:4000/api/auth/login",
          { email, password },
          { withCredentials: true }
        );
        if (data.success) {
          toast.success("Login successful!");
          router.push("/");
        } else {
          toast.error(data.message || "Login failed");
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(
          error.response.data?.message ||
            "Something went wrong during authentication"
        );
      } else {
        toast.error("Something went wrong during authentication");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-gray-200 to-blue-400">
      <ToastContainer position="top-right" autoClose={3000} />
      <Link href="/">
        <Image
          src={assets.logo}
          alt="Logo"
          className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
        />
      </Link>
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-colour text-sm">
        <h2 className="text-3xl font-semibold text-white text-center mb-3">
          {state === "Sign Up" ? "Create account" : "Login"}
        </h2>
        <p className="text-center text-sm mb-6 text-white">
          {state === "Sign Up"
            ? "Create your account"
            : "Login to your account"}
        </p>
        <form onSubmit={handleSubmit}>
          {state === "Sign Up" && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#5C6691]">
              <Image src={assets.person_icon} alt="User Icon" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Full Name"
                required
                className="bg-transparent outline-none text-white"
              />
            </div>
          )}
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#5C6691]">
            <Image src={assets.mail_icon} alt="Mail Icon" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email id"
              required
              className="bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#5C6691]">
            <Image src={assets.lock_icon} alt="Lock Icon" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
              required
              className="bg-transparent outline-none text-white"
            />
          </div>
          <Link href="/forgetPassword">
            <p className="mb-4 text-indigo-500 cursor-pointer">
              Forget Password
            </p>
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="text-white font-medium w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900"
          >
            {loading ? "Processing..." : state}
          </button>
        </form>
        {state === "Sign Up" ? (
          <p className="text-gray-400 text-center text-xs mt-4">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-400 cursor-pointer underline"
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="text-gray-400 text-center text-xs mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-400 cursor-pointer underline"
            >
              Signup Here
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
