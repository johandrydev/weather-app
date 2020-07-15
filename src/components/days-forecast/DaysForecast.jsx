import React, { useEffect } from 'react';
import { useState } from 'react';
import data from '../../data.json';

// My components
import Card from '../card';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * DaysForecast component shows the weather of the next days
 */
const DaysForecast = () => {
  const [showDays, updateDays] = useState([]);

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
    const urls = `${data.urlApi}forecast?q=${data.mainCity}&units=metric&appid=${data.id}`;
    const resp = await request(urls);
    updateDays([
      resp.list[0],
      resp.list[10],
      resp.list[20],
    ])
  }

  useEffect(() => {
    handleRequest();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {showDays.map(({ weather, dt_txt, main }, index) => (
        <Card key={index} cssClass="days shadow mb-1">
          <div className="weathers">
            <img src={`${data.urlImgs}${weather[0].icon}.png`} alt="" />
            <div>
              <span>{days[new Date(dt_txt).getDay()]}</span>
              <span className="weather">{weather[0].description}</span>
            </div>
          </div>
          <Card bg={index === 0 ? 'bg-primary' : 'bg-secondary'} cssClass="metric">
            {Math.round(main.temp_min)}°/{Math.round(main.temp_max)}°
          </Card>
        </Card>
      ))}
    </>
  );
};
export default DaysForecast;
