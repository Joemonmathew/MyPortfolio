// components/Layout.js

import React from 'react';
import Sidebar from '../pages/Sidebar';
import Navbar from '@/pages/navbar';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className=''>
        {children}
      </main>
    </div>
    
  );
}

export default Layout;
// lg:pl-[320px]