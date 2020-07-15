import React from 'react';
import './App.scss';

// My components
import Header from './components/header';
import DaysForecast from './components/days-forecast';
import Card from './components/card';
import Avatares from './components/avatares';

const App = () => {
  return (
    <div className="container">
      <Header />
      <section className="content">
        <div className="cards-main">
          <div>
            <h3 className="mb-2"><strong>3 Days</strong> Forecast</h3>
            <DaysForecast />
          </div>

          <div>
            <h3 className="mb-2"><strong>Place to</strong> Visit</h3>
            <Card bg="bg-secondary" border="border-medium" cssClass="place">
              <div className="address">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h5>Test</h5>
                  <h5>Test</h5>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Avatares />


            <div className="places">
              <Card bg="bg-secondary" cssClass="places">
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h5>Test</h5>
                    <h5>Test</h5>
                  </div>
                </div>
              </Card>
              <Card bg="bg-secondary" cssClass="places lg">
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h5>Test</h5>
                    <h5>Test</h5>
                  </div>
                </div>
                <div className="btn bg-primary">
                  <i className="fas fa-plus"></i>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="locations">
          <div className="card bg-white location mb-1 border-small">
            <div className="card-content">
              <div className="card bg-primary border-small">

              </div>
              <div>
                29C
              </div>
            </div>
            <div>

            </div>
          </div>

          <div className="card bg-white location mb-1 border-small">
            <div className="card-content">
              <div className="card bg-primary border-small">

              </div>
              <div>
                29C
              </div>
            </div>
            <div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default App;
