import React from 'react';

const Sidebar = () => {
  return (
    <div className=' top-0 left-0 h-screen w-1/5 bg-gray-800 text-green-500 p-4 box-border '>
      <h3>Joemon Mathew</h3>
      <ul className='flex flex-col items-center justify-center mt-4 space-y-5'>
        <li><a>About</a></li>
        <li><a>Work</a> </li>
        <li><a>Skills</a></li>
        <li><a>Resume</a></li>
        <li><a>Blogs</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
