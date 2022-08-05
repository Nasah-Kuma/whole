import React from 'react';
import './loader.css';

const Loader = (Props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const message = Props.message || 'Loading ...';
  return (
    <div className="hse">
      <div className="pos">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
          <p>
            {
              message
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
