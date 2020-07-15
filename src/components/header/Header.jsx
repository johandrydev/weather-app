import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data.json';

/**
 * Header component show current weather
 * @param {*} props
 */
const Header = ({ weather }) => {
  return (
    <>
      <div className="container-temp">
        <div>
          <div className="content-generic content-sup">
            {
              weather.weather && 
              <img src={`${data.urlImgs}${weather.weather[0].icon}.png`} alt="" />
            }
          </div>
          <div className="content-generic content-inf">
            <h2>{weather.main && `${Math.round(weather.main.temp)}°`}</h2>
          </div>
        </div>
        <div className="title">
          <i className="fas fa-map-marker-alt"></i>
          <h2>Bogotá</h2>
        </div>
      </div>
      <header className="header">
      </header>
    </>
  );
};
Header.propTypes = {
  weather: PropTypes.object,
}
export default Header;
