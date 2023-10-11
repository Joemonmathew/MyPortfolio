import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const isActive = (item) => {
    return router.pathname === item;
  };

  return (
    <div className='fixed top-0 left-0 h-screen w-1/5 box-border bg-primary-blue '>
      <div className='flex-row h-70 text-center my-4'>
        <img src='/images/joemon1.jpg' alt="Image Description" className="w-[10rem] h-[10rem] mx-auto rounded-full " />
        <h3>Joemon Mathew</h3>
      </div>
      <ul className='flex flex-col items-center h-full  mr-1 space-y-5 bg-[#020107] box-border '>
        <li className='mt-5'>
          <Link href='/About' className={isActive('/About') ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link href='/Work' className={isActive('/Work') ? 'active' : ''}>
            Work
          </Link>
        </li>
        <li>
          <Link href='' className={isActive('') ? 'active' : ''}>
            Skills
          </Link>
        </li>
        <li>
          <Link href='' className={isActive('') ? 'active' : ''}>
            Resume
          </Link>
        </li>
        <li>
          <Link href='/blogs' className={isActive('/blogs') ? 'active' : ''}>
            Blogs
          </Link>
        </li>
        <li>
          <Link href='' className={isActive('') ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;