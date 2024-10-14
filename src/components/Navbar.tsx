"use client";
import useSession from "@/Hooks/useSession";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { logout } from "@/lib/logout";

const NavLinks = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "For doctors",
    link: "/",
  },
];

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const session = useSession() as object;
  useEffect(
    function () {
      if (session) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    },
    [session, setIsAuth, isAuth]
  );

  return (
    <div className="flex justify-between p-4 py-12 lg:px-12">
      <header className="text-xl">
        <Link href={"/"}>Logo</Link>
      </header>
      <div className="flex items-center gap-4 underline">
        {NavLinks.map((nav) => (
          <Link
            href={nav.link}
            key={nav.title}
            className="font-sans text-sm hover:text-blue-200"
          >
            {nav.title}
          </Link>
        ))}
        {!isAuth ? (
          <div className="flex gap-4">
            <Link
              href="/signup"
              className="font-sans text-sm hover:text-blue-200"
            >
              Create account
            </Link>
            <Link
              href="/login"
              className="font-sans text-sm hover:text-blue-200"
            >
              login
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/profile"
              className="font-sans text-sm hover:text-blue-200"
            >
              Profile
            </Link>

            <Button
              onClick={() => logout()}
              variant="link"
              className="p-0 font-sans text-sm font-normal hover:text-blue-200"
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
