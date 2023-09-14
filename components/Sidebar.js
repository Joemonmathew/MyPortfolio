import React from 'react';

const Sidebar = () => {
  return (
    <div className=' top-0 left-0 h-screen w-1/5 bg-gray-800 text-green-500 p-4 box-border '>
      <h3>Joemon Mathew</h3>
      <ul className='flex flex-col items-center justify-center mt-4'>
        <li className='mt-4'><a>About</a></li>
        <li className='mt-4'><a>Work</a> </li>
        <li className='mt-4'><a>Skills</a></li>
        <li className='mt-4'><a>Resume</a></li>
        <li className='mt-4'><a>Blogs</a></li>
        <li className='mt-4'><a>Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
