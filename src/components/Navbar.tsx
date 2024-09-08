import Link from 'next/link';
import React from 'react';

const NavLinks = [
  {
    title: 'About',
    link: '/',
  },
  {
    title: 'For Doctors',
    link: '/',
  },
  {
    title: 'For Doctors',
    link: '/',
  },
  {
    title: 'Login',
    link: '/login',
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="p-12 flex justify-between">
        <header className="text-xl">Logo</header>
        <div className="flex gap-8">
          {NavLinks.map((nav) => (
            <Link
              href={nav.link}
              key={nav.title}
              className=" font-sans hover:text-blue-200"
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Navbar;
