// components/Layout.js

import React from 'react';
import Sidebar from '../pages/Sidebar';

function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <main className='pl-[320px]'>
        {children}
      </main>
    </div>
    
  );
}

export default Layout;
