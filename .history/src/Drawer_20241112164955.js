import React from 'react';
import PropTypes from 'prop-types';
import './Drawer.css';

const Drawer = ({ children, width = '250px', isOpen = false, onClose, position = 'left', backgroundColor="#333", textColor="#fff" }) => {
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
    zIndex: 2, // Ensures the drawer appears above other elements
  };

  const overlayStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1, // Ensures the overlay appears below the drawer
  };

  return (
    <>
      <div style={overlayStyles} onClick={onClose}></div>
      <div style={drawerStyles} id='menu-section'>
        <button onClick={onClose} style={{ marginBottom: '16px', background: 'none', color: 'inherit', border: 'none', cursor: 'pointer' }}>Close</button>
        {children}
      </div>
    </>
  );
};

Drawer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
};

export default Drawer;
