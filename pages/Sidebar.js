import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('About');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='fixed top-0 left-0 h-screen w-1/5 box-border bg-[#081f2e] '>
      <div className='flex-row h-70 text-center my-4'>
        <img src='/images/joemon1.jpg' alt="Image Description" className="w-[10rem] h-[10rem] mx-auto rounded-full " />
        <h3>Joemon Mathew</h3>
      </div>
      <ul className='flex flex-col items-center h-full  mr-1 space-y-5 bg-[#020107] box-border '>
        <li className='mt-5'>
          <Link href='/About'
            onClick={() => handleItemClick('About')}
            className={`cursor-pointer px-20 text-lg ${selectedItem === 'About' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link href='/Work'
            onClick={() => handleItemClick('Work')}
            className={`cursor-pointer px-20 text-xl ${selectedItem === 'Work' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            Work
          </Link>
        </li>
        <li>
          <Link href=''
            onClick={() => handleItemClick('Skills')}
            className={`cursor-pointer px-20 text-xl ${selectedItem === 'Skills' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link href=''
            onClick={() => handleItemClick('Resume')}
            className={`cursor-pointer px-20 text-xl ${selectedItem === 'Resume' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link href=''
            onClick={() => handleItemClick('Blogs')}
            className={`cursor-pointer px-20 text-xl ${selectedItem === 'Blogs' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link href=''
            onClick={() => handleItemClick('Contact')}
            className={`cursor-pointer px-20 text-xl ${selectedItem === 'Contact' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
