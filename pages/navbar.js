import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-primary-blue p-4 lg:hidden">
        <div className="container mx-auto">
        <ul className="flex justify-end items-center  space-x-4">
          {/* <li>
            <Link href="/">
              Home
            </Link>
          </li> */}
          <li>
            <Link href="#About">
              About
            </Link>
          </li>
          <li>
            <Link href="#Work">
              Work
            </Link>
          </li>
          <li>
            <Link href="#Blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="#Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
