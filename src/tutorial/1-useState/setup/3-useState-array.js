import React, { Fragment, useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => 
      person.id !== id
    )
    setPeople(newPeople);
  }
  return <Fragment>
      {people.map((person) => {
        return (
           <div key={person.id} className='item'><h4>{person.name}</h4>
           <button className='btn' onClick={() => removeItem(person.id)}>Remove Item</button>
           </div>

        )
      })}
      <button className='btn' onClick={()=> setPeople([])}>Clear Item</button>
  </Fragment>
};

export default UseStateArray;
