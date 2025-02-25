"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../assets/assets/assets";
import Link from "next/link";

function login() {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-gray-200 to-blue-400">
      <Link href="/">
        <Image
          src={assets.logo}
          alt=""
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
        <form>
          {state === "Sign Up" && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#5C6691]">
              <Image src={assets.person_icon} alt="" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Full Name"
                required
                className="bg-transparent outline-none"
              ></input>
            </div>
          )}

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#5C6691]">
            <Image src={assets.mail_icon} alt="" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email id"
              required
              className="bg-transparent outline-none"
            ></input>
          </div>

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#5C6691]">
            <Image src={assets.lock_icon} alt="" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
              required
              className="bg-transparent outline-none"
            ></input>
          </div>
          <Link href="/forgetPassword">
            <p className="mb-4 text-indigo-500 cursor-pointer">
              Forget Password
            </p>
          </Link>
          <button className="text-white font-medium w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900">
            {state}
          </button>
        </form>

        {state === "Sign Up" ? (
          <p className="text-gray-400 text-center text-xs mt-4">
            Already have an account?{"    "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-400 cursor-pointer underline"
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="text-gray-400 text-center text-xs mt-4">
            Don't have an account?{"    "}
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
export default login;
