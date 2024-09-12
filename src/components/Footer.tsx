import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 bg-zinc-800 p-12">
      <div className="flex justify-between">
        <header className="text-xl text-zinc-50">Logo</header>
        <h1 className="text-zinc-50 lg:text-7xl">Doctorii</h1>
      </div>

      <div className="mt-12 text-zinc-50 lg:flex lg:justify-between">
        <div>
          <div className="flex gap-44">
            {/* col 1 */}
            <div>
              <h2>Links</h2>
              <ul className="mt-8 font-sans">
                <li>About</li>
                <li>For Doctors</li>
                <li>For Patients</li>
                <li>Login</li>
              </ul>
            </div>
            {/* col 2 */}
            <div>
              <h2>Are yov a doctor?</h2>
              <Link href={"/"} className="font-sans underline">
                Join Doctorii
              </Link>
            </div>
          </div>
        </div>

        {/* col 3 */}
        <div className="mt-12 lg:mt-0">
          <h2>Contact us</h2>
          <p>
            Doctorii® <br /> Sudan, Khartoum <br /> Bahri, Kafouri B4 ,<br />
            Bahri, KH. 11111
          </p>
          <p className="font-sans underline">
            {" "}
            Contact@Doctorii.com <br /> +249 123 456 789
          </p>
        </div>
      </div>

      <h2 className="mt-8 text-zinc-50">
        ® {new Date().getFullYear()} Doctorii
      </h2>
    </footer>
  );
};

export default Footer;
