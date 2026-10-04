import React from 'react';
import './PredictionCard.css';

function PredictionCard({ prediction }) {
  const confidenceColor =
    prediction.confidence === 'High'
      ? '#10b981'
      : prediction.confidence === 'Medium'
      ? '#f59e0b'
      : '#ef4444';

  return (
    <div className="prediction-card">
      <h4>{prediction.pattern}</h4>

      <div className="prediction-stats">
        <div className="mini-stat">
          <span>Probability</span>
          <strong>{prediction.probability}%</strong>
        </div>

        <div className="mini-stat">
          <span>Confidence</span>
          <strong style={{ color: confidenceColor }}>{prediction.confidence}</strong>
        </div>
      </div>

      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: `${prediction.probability}%` }} />
      </div>
    </div>
  );
}

export default PredictionCard;
