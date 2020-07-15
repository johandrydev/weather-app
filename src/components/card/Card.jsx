import React from 'react';
import PropTypes from 'prop-types';

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
Card.propTypes = {
  bg: PropTypes.string,
  border: PropTypes.string,
  cssClass: PropTypes.string
}
export default Card;
