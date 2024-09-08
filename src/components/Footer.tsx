import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="p-12 bg-zinc-800">
      <div className="flex justify-between">
        <header className="text-xl text-zinc-50">Logo</header>
        <h1 className="text-zinc-50 text-7xl">Doctorii</h1>
      </div>

      <div className="flex justify-between mt-12 text-zinc-50">
        <div>
          <div className=" flex gap-44">
            {/* col 1 */}
            <div>
              <h2>Links</h2>
              <ul className="font-sans mt-8">
                <li>About</li>
                <li>For Doctors</li>
                <li>For Patients</li>
                <li>Login</li>
              </ul>
            </div>
            {/* col 2 */}
            <div>
              <h2>Are yov a doctor?</h2>
              <Link href={'/'} className="font-sans underline">
                Join Doctorii
              </Link>
            </div>
          </div>
        </div>

        {/* col 3 */}
        <div>
          <h2>Contact us</h2>
          <p>
            Doctorii® <br /> Sudan, Khartoum <br /> Bahri, Kafouri B4 ,<br />
            Bahri, KH. 11111
          </p>
          <p className="font-sans underline">
            {' '}
            Contact@Doctorii.com <br /> +249 123 456 789
          </p>
        </div>
      </div>

      <h2 className="text-zinc-50 mt-8">
        ® {new Date().getFullYear()} Doctorii
      </h2>
    </footer>
  );
};

export default Footer;
