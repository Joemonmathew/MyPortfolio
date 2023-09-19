import React, { useState } from 'react';

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
      <div></div>
      <ul className='flex flex-col items-center h-full  mr-1 space-y-5 bg-[#020107] box-border '>
        <li className='mt-5'>
          <a
            onClick={() => handleItemClick('About')}
            className={`cursor-pointer px-20 text-lg ${selectedItem === 'About' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => handleItemClick('Work')}
            className={`cursor-pointer px-20 text-xl ${selectedItem === 'Work' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            Work
          </a>
        </li>
        <li>
          <a
            onClick={() => handleItemClick('Skills')}
            className={`cursor-pointer px-20 text-xl ${selectedItem === 'Skills' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            onClick={() => handleItemClick('Resume')}
            className={`cursor-pointer px-20 text-xl ${selectedItem === 'Resume' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            onClick={() => handleItemClick('Blogs')}
            className={`cursor-pointer px-20 text-xl ${selectedItem === 'Blogs' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            Blogs
          </a>
        </li>
        <li>
          <a
            onClick={() => handleItemClick('Contact')}
            className={`cursor-pointer px-20 text-xl ${selectedItem === 'Contact' ? 'text-white bg-[#081f2e]' : 'text-gray-300'}`}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
