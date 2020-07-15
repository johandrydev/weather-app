import React, { useEffect } from 'react';
import data from '../../data.json';
import { useState } from 'react';

// My components
import Card from '../card';

/**
 * Locations component
 */
const Locations = () => {
  const [location, updateLocation] = useState([]);

  const request = (url) => {
    return new Promise((resolve) => {
      const request = new XMLHttpRequest();
      request.open("GET", url);
      request.onload = function () {
        resolve(JSON.parse(request.responseText));
      }
      request.send();
    });
  }

  const handleRequest = async () => {
    const urls = [
      `${data.urlApi}weather?q=${data.secondaryCity}&units=metric&appid=${data.id}`,
      `${data.urlApi}weather?q=${data.optionalCity}&units=metric&appid=${data.id}`
    ];
    let resp = [];

    for (let i = 0; i < urls.length; i++) {
      resp = [
        ...resp,
        await request(urls[i])
      ];
    }
    updateLocation(resp);
  }

  useEffect(() => {
    handleRequest();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="locations">
      {location.map(({ id, weather, main, name }) => (
        <Card key={id} cssClass="locationsWeather shadow mb-1">
          <div className="card-content">
            <Card bg="bg-secondary location">
              <img src={`${data.urlImgs}${weather[0].icon}.png`} alt="" />
            </Card>
            <div className="content-location">
              <h4 className="metric-bl">{Math.round(main.temp)}°</h4>
              <div>
                <h4 style={{
                  fontSize: 15
                }}>{name}</h4>
                <h5 style={{
                  fontSize: 12
                }}>Francia</h5>
              </div>
            </div>
          </div>
          <div className="info">
            <span>humidity {main.humidity}%</span>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default Locations;
