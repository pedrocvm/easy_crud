import React from 'react';

export default function Spinner({message}) {
  return (
    <div style={styles.flexRow} >
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only" hidden={message}>
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
        <span style={{marginLeft: '10px', fontSize: '1.2rem'}} hidden={message}>Aguarde...</span>
    </div>
  );
};

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};