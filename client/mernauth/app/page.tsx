import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/bg_img.png')` }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}
