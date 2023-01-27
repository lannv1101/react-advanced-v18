import React, { useState, useEffect, Fragment } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
    <button className="btn" onClick={() => setShow(!show)}>Show/Hide</button>
    {show && <Item/>}
    </Fragment>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize',checkSize);
    return () =>{
      window.removeEventListener('resize',checkSize);
    }
  },[])
   return (
    <div style={{marginTop: '2rem'}}>
      <h1>Window</h1>
      <h2>Size: {size}</h2>
    </div>
   )
}

export default ShowHide;
