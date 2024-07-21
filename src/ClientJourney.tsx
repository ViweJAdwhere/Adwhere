import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const CampaignPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(new Date()); // State for DatePicker

  const handlePopup = (content: string) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Activity',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  return (
    <div className="campaign-page">
      <header>
        <div className="menu-icon">☰</div>
        <div className="client">Client</div>
        <div className="search">Search</div>
      </header>

      <div className="main-content">
        <div className="left-column">
          <div className="signal-boxes">
            <div className="signal-box">Wall Fan Signal</div>
            <div className="signal-box">Fan Air Signal</div>
            <div className="signal-box">Narrow Signal</div>
            <div className="signal-box">Little Signal</div>
          </div>

          <div className="activity-box">
            <div>Activity per minute: 0.15</div>
            <div>Typing: 445 Website: 554 Design: -</div>
            <div>Time at computer: 3h 43m</div>
          </div>

          <div className="campaign-table">
            {/* Add campaign table content here */}
            <table>
              <thead>
                <tr>
                  <th>Campaign</th>
                  <th>Status</th>
                  <th>Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Campaign 1</td>
                  <td>Active</td>
                  <td>$500</td>
                </tr>
                <tr>
                  <td>Campaign 2</td>
                  <td>Paused</td>
                  <td>$300</td>
                </tr>
                <tr>
                  <td>Campaign 3</td>
                  <td>Completed</td>
                  <td>$800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="right-column">
          <div className="analytics-boxes">
            <div className="analytics-box">All Impressions</div>
            <div className="analytics-box">Click-through rate</div>
            <div className="analytics-box">
              <div>Active campaigns rate</div>
              <div>3584.25</div>
            </div>
          </div>

          <div className="campaign-date">
            <div>Campaign date set</div>
            <button onClick={() => handlePopup('calendar')}>Extend</button>
            {/* Add calendar component here */}
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>

          <div className="campaign-changes">
            <h2>Campaign changes</h2>
            <div className="changes-section">
              <h3>Items out of compliance</h3>
              <ul>
                <li onClick={() => handlePopup('compliance1')}>Dissemination order not met</li>
                <li onClick={() => handlePopup('compliance2')}>Dissemination order expired and not removed</li>
              </ul>
            </div>
            <div className="changes-section">
              <h3>Type with out of compliance</h3>
              <ul>
                <li onClick={() => handlePopup('type1')}>Ad item expires today</li>
                <li onClick={() => handlePopup('type2')}>Ad item expired yesterday</li>
                <li onClick={() => handlePopup('type3')}>Threshold order expired</li>
              </ul>
            </div>
            <div className="total-fee">
              <span>Total Fee</span>
              <span>$402.78</span>
            </div>
            <button className="pay-fee">Pay fee</button>
          </div>

          <div className="campaign-activity">
            <div className="activity-chart">
              {/* Add activity chart here */}
              <Bar data={data} />
            </div>
            <div className="status">
              <span>Status</span>
              <span className="active">Active</span>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            {popupContent === 'calendar' && (
              <div className="calendar">
                {/* Add calendar component here */}
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />
              </div>
            )}
            {popupContent.startsWith('compliance') && (
              <div className="compliance-popup">
                <h3>New Plan(s) and/or order(s)</h3>
                <input type="text" placeholder="e.g. Material" />
              </div>
            )}
            {popupContent.startsWith('type') && (
              <div className="type-popup">
                <h3>Plan to take action soon</h3>
                <div>e.g. Allocate</div>
                <div>e.g. Other reasons</div>
              </div>
            )}
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignPage;
