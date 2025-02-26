import React from "react";
import { assets } from "../app/assets/assets/assets";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <Image src={assets.logo} alt="Logo" className="w-28 sm:w-32" />
      <Link href="/login">
        <button className="flex items-center gap-2 border-2 border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-lime-200 transition-all">
          Login <Image src={assets.arrow_icon} alt="" />
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
