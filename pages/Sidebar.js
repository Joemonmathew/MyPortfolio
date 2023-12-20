import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-1/5 box-border bg-primary-blue '>
      <div className='flex-row h-76 text-center my-4'>
        <img src='/images/joemon1.jpg' alt="Image Description" className="w-[12rem] h-[12rem] mx-auto rounded-full " />
        <h3 className='mt-2'>Joemon Mathew</h3>
      </div>
      <ul className='flex flex-col items-center h-full  mr-1 space-y-7 bg-[#020107] box-border '>
        <li className='mt-6'>
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
          <Link href='#Blogs' >
            Blogs
          </Link>
        </li>
        <li>
          <Link href='#Contact' >
            Contact
          </Link>
        </li>
        <li>
          <Link href='https://github.com/Joemonmathew' >
          <img src='/images/github.png' className='w-10 h-10'/>
          </Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/joemon-mathew-67a63b200/' >
          <img src='/images/linkedin.png' className='w-10 h-10'/>
          </Link>
        </li>
        <li>
          <Link href='https://www.instagram.com/joe_mon_/' >
          <img src='/images/instagram.png' className='w-10 h-10'/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;