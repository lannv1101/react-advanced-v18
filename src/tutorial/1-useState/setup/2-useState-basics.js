import React, { Fragment, useState } from 'react';

const UseStateBasics = () => {
  const [text,setText] = useState("Title State")

  const handleClick= () => {
    if (text === 'Title State') {
      setText("People Title");
    }else {
      setText('Title State');
    }

  }
  return(
    <Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </Fragment>
  )

};

export default UseStateBasics;
