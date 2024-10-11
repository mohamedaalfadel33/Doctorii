"use client";
import useSession from "@/Hooks/useSession";
import Link from "next/link";
import React from "react";

const NavLinks = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "For Doctors",
    link: "/",
  },
  {
    title: "Create Account",
    link: "/signup",
  },
  {
    title: "Login",
    link: "/login",
  },
];

const NavLinksAuthenticated = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "For Doctors",
    link: "/",
  },
  {
    title: "Logout",
    link: "/",
  },
  {
    title: "Profile",
    link: "/",
  },
];

function Navbar() {
  const session = useSession();
  console.log(session);

  return (
    <div className="flex justify-between p-4 py-12 lg:p-12">
      <header className="text-xl">Logo</header>
      <div className="flex gap-2 underline lg:gap-8">
        {session
          ? NavLinksAuthenticated.map((nav) => (
              <Link
                href={nav.link}
                key={nav.title}
                className="font-sans text-sm hover:text-blue-200"
              >
                {nav.title}
              </Link>
            ))
          : NavLinks.map((nav) => (
              <Link
                href={nav.link}
                key={nav.title}
                className="font-sans text-sm hover:text-blue-200"
              >
                {nav.title}
              </Link>
            ))}
      </div>
    </div>
  );
}

export default Navbar;
