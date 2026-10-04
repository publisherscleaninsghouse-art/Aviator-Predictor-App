import React from 'react';
import './AnalyticsCard.css';

function AnalyticsCard({ title, value, unit, icon, color }) {
  return (
    <div className="analytics-card">
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <h3>{title}</h3>
      </div>

      <div className="card-value" style={{ color }}>
        {value}
      </div>

      <p className="card-unit">{unit}</p>
    </div>
  );
}

export default AnalyticsCard;
