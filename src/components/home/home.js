import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <div className="home-container">
      <div className="sidebar">
        <ul className="vertical-list">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Invoices</a></li>
          <li><a href="#">Schedules</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h2>Upload CSV File</h2>
        <input type="file" accept=".csv" />
      </div>
    </div>
  );
}

export default HomePage;
