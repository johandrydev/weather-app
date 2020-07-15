import React from 'react';

/**
 * Card Component
 * @param {*} props 
 */
const Card = ({
  children,
  bg = 'bg-white',
  border = 'border-small',
  cssClass = ''
}) => {
  const classStyle = `card ${bg} ${border} ${cssClass}`;
  return (
    <div className={classStyle}>
      { children }
    </div>
  );
};

export default Card;
