import React, { useState } from 'react';

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true); // Explicitly type state
  const [showVehicle, setShowVehicle] = useState<boolean>(false); // Explicitly type state

  return (
    <div className="driver-dashboard">
      <header>
        <div className="menu-icon">☰</div>
        <h1>Driver</h1>
        <div className="refresh-icon">↻</div>
        <div className="search">Search</div>
      </header>

      <div className="dashboard-content">
        <div className="balance-section">
          <div className="credit-balance">
            <h3>Credit balance</h3>
            <p>1401.25</p>
            <button className="withdraw-btn">Withdraw</button>
          </div>
          <div className="cash-balance">
            <h3>Cash balance</h3>
            <p>€29</p>
          </div>
        </div>

        <div className="earnings-section">
          <div className="average-daily-amount">
            <h3>Average daily amount earned</h3>
            <p>€50.00</p>
          </div>
          <div className="daily-average">
            <h3>Daily average</h3>
            <p>8.90</p>
          </div>
        </div>

        <div className="vehicle-section">
          <h3>Vehicle</h3>
          <div className="vehicle-info">
            <p>BJ 277 BA</p>
            <p>Toyota Corolla</p>
            <p>2019</p>
            <p>Black</p>
          </div>
          <button className="change-btn" onClick={() => setShowVehicle(!showVehicle)}>
            Change
          </button>
          {showVehicle && (
            <div className="vehicle-popup">
              {/* Add vehicle change form here */}
              <form>
                <label>
                  Vehicle Number:
                  <input type="text" name="vehicleNumber" />
                </label>
                <label>
                  Model:
                  <input type="text" name="model" />
                </label>
                <label>
                  Year:
                  <input type="text" name="year" />
                </label>
                <label>
                  Color:
                  <input type="text" name="color" />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>

        <div className="online-status">
          <h3>Are you online?</h3>
          <div className="toggle-buttons">
            <button
              className={isOnline ? 'active' : ''}
              onClick={() => setIsOnline(true)}
            >
              Yes
            </button>
            <button
              className={!isOnline ? 'active' : ''}
              onClick={() => setIsOnline(false)}
            >
              No
            </button>
          </div>
        </div>

        <div className="vehicle-checklist">
          <h3>Vehicle checklist</h3>
          <div className="toggle">
            <div className="toggle-switch"></div>
          </div>
        </div>

        <div className="number-of-vehicles">
          <h3>Number of vehicles</h3>
          <input type="text" placeholder="Enter number of vehicles" />
        </div>

        <div className="status">
          <h3>Status</h3>
          <p className="active-status">Active</p>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
