// components/Layout.js

import React from 'react';
import Sidebar from '../pages/Sidebar';

function Layout({ children }) {
  return (
    <div>
      <Sidebar /> {/* Include the Sidebar here */}
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
