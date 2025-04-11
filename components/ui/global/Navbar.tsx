"use client";

import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-50 bg-white flex items-center justify-between px-12 md:px-24 h-20 shadow-sm">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl block">
          <Image src={logo} alt="logo" width={30} height={50}/>
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button>
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 flex flex-col bg-white p-4 z-50 shadow-md">
          <Button className="mb-3 text-gray-600">
            <Link href="/sign-in" onClick={toggleMenu}>
              Login
            </Link>
          </Button>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Link href="/sign-up" onClick={toggleMenu}>
              Sign up
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
