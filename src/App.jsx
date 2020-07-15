import React, { useState, useEffect } from 'react';
import data from './data.json';
import './App.scss';

// My components
import Header from './components/header';
import DaysForecast from './components/days-forecast';
import Card from './components/card';
import Avatares from './components/avatares';
import Locations from './components/locations';

const App = () => {
  const [weather, updateWheater] = useState({});

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
    const urls = `${data.urlApi}weather?q=${data.secondaryCity}&units=metric&appid=${data.id}`;
    const resp = await request(urls);
    updateWheater(resp);
  }

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <div className="container">
      <Header weather={weather}/>
      <section className="content">
        <div className="cards-main">
          <div>
            <h3 className="mb-2"><strong>3 Days</strong> Forecast</h3>
            <DaysForecast />
          </div>

          <div>
            <h3 className="mb-2"><strong>Place to</strong> Visit</h3>
            <Card bg="bg-secondary" border="border-medium" cssClass="place shadow">
              <div className="address">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h5>Arab Street</h5>
                  <h5>Singapore</h5>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Avatares />
            <div className="places">
              <Card bg="bg-secondary" cssClass="places shadow">
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h5>Art Science</h5>
                    <h5>Museum</h5>
                  </div>
                </div>
              </Card>
              <Card bg="bg-secondary" cssClass="places shadow lg">
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h5>fountain</h5>
                    <h5>of health</h5>
                  </div>
                </div>
                <div className="btn bg-primary">
                  <i className="fas fa-plus"></i>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <Locations />
      </section>
    </div>
  );
};

export default App;
