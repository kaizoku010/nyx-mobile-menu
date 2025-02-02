A simple, customizable mobile drawer component for React applications. Perfect for creating responsive menus or side panels in mobile views.

Installation
bash ...
npm or yarn install nyx-drawer-menu

Usage
Import and use the MobileDrawer from the Nyx component u installed 

Demo Link here...

https://codewithdixon.vercel.app/

import React, { useState } from 'react';
import MobileDrawer from 'nyx-drawer-menu';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer}>Open Drawer</button>
      
      <MobileDrawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <h2>Drawer Content</h2>
        
        <p>This is the content inside the mobile drawer.</p>
        <button onClick={toggleDrawer}>Close Drawer</button>
      </MobileDrawer>
    </div>
  );
}

export default App;

Props
isOpen: boolean - Controls the open/closed state of the drawer.
onClose: function - Callback function to close the drawer.
width (optional): string - Width of the drawer, e.g., "300px" or "80%".
position (optional): string - Position of the drawer ("left" or "right").
animation (optional): string - Animation style for the drawer opening, e.g., "slide".




License
MIT

