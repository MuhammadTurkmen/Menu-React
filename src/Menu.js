import React from 'react';

const Menu = ({items}) => {
   
  return <div className='section-center'>
    {items.map((menuItem) => {
      const {id, title,img, desc} = menuItem
    })}
  </div>
};

export default Menu;
