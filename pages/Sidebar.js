import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-1/5 box-border bg-primary-blue '>
      <div className='flex-row h-70 text-center my-4'>
        <img src='/images/joemon1.jpg' alt="Image Description" className="w-[10rem] h-[10rem] mx-auto rounded-full " />
        <h3>Joemon Mathew</h3>
      </div>
      <ul className='flex flex-col items-center h-full  mr-1 space-y-5 bg-[#020107] box-border '>
        <li className='mt-5'>
          <Link href='#About' >
            About
          </Link>
        </li>
        <li>
          <Link href='#Work' >
            Work
          </Link>
        </li>
        <li>
          <Link href=''>
            Skills
          </Link>
        </li>
        <li>
          <Link href='' >
            Resume
          </Link>
        </li>
        <li>
          <Link href='#Blogs' >
            Blogs
          </Link>
        </li>
        <li>
          <Link href='#Contact' >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;