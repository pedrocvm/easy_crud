/* eslint-disable */
import React from 'react';
import css from '../css.modules/app.module.css';

export default function ScrollUp() {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
  });
  };

  return (
    <div >
      <a onClick={handleScrollUp} style={styles.scrollUp} id="scrollUp">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

const styles = {
  scrollUp: {
    background: 'rgba(0,0,0,0.3)',
    color: '#000',
    width: '40px',
    height: '40px',
    position: 'fixed',
    bottom: '10px',
    right: '20px',
    borderRadius: '4px',
    textAlign: 'center',
    lineHeight: '38px',
    cursor: 'pointer',
  },
};
