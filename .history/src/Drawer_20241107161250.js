import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Drawer.css'; // Import your styles

const Drawer = ({ children, width = '250px', isOpenInitially = false, position = 'left' }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const drawerStyles = {
    position: 'fixed',
    top: 0,
    [position]: isOpen ? 0 : `-${width}`,
    width,
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    transform: isOpen ? 'translateX(0)' : `translateX(-${width})`,
    backgroundColor: '#333',
    color: '#fff',
    overflowX: 'hidden',
    padding: '16px',
  };

  const overlayStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  };

  return (
    <>
      <div style={overlayStyles} onClick={toggleDrawer}></div>
      <div style={drawerStyles}>
        <button onClick={toggleDrawer} style={{ marginBottom: '16px', background: 'none', color: 'inherit', border: 'none', cursor: 'pointer' }}>Close</button>
        {children}
      </div>
    </>
  );
};

Drawer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  isOpenInitially: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
};

export default Drawer;
