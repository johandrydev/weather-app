import React, { useEffect } from 'react';
import { useState } from 'react';
import data from '../../data.json';

// My components
import Card from '../card';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DaysForecast = () => {
  const [showDays, updateDays] = useState([]);

  const handleRequest = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const resp = JSON.parse(xhttp.responseText);
        updateDays([
          resp.list[0],
          resp.list[10],
          resp.list[20],
        ])
      }
    };
    xhttp.open("GET", `${data.urlApi}forecast?q=${data.mainCity}&units=metric&appid=${data.id}`, true);
    xhttp.send();
  }

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <>
      {showDays.map(({weather, dt_txt, main}, index) => (
        <Card key={index} cssClass="days mb-1">
          <div className="weathers">
            <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="" />
            <div>
              <span>{days[new Date(dt_txt).getDay()]}</span>
              <span className="weather">{weather[0].description}</span>
            </div>
          </div>
          <Card bg="bg-primary" cssClass="metric">
            {Math.round(main.temp_min)}°/{Math.round(main.temp_max)}°
          </Card>
        </Card>
      ))}
    </>
  );
};

export default DaysForecast;
