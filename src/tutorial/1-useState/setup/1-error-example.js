import React, { Fragment } from 'react';

const ErrorExample = () => {
  let title = 'random title';
  console.log(title);
  const handleClick = () =>{
    title = "hello people";
    console.log(title);
  }
  return(
    <Fragment>
      <h2>{title}</h2>
      <button type="button" className='btn' onClick={handleClick}>Change Title</button>
    </Fragment>
  )
};

export default ErrorExample;
