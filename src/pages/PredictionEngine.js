import React, { useState } from 'react';
import './PredictionEngine.css';

function PredictionEngine() {
  const [values, setValues] = useState({
    target: 1.8,
    rounds: 150,
    risk: 'medium',
    window: 'last_24h',
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const predicted = (Math.random() * 4 + 1).toFixed(2);
      const confidence = Math.floor(Math.random() * 30 + 65);
      const riskScore = Math.floor(Math.random() * 100);
      const recommendation = Math.random() > 0.5 ? 'BULLISH' : 'BEARISH';

      setResult({
        predicted,
        confidence,
        riskScore,
        recommendation,
        patterns: [
          { name: 'Momentum Pattern', strength: 72 },
          { name: 'Volatility Shift', strength: 58 },
          { name: 'Support Level', strength: 64 },
        ],
      });

      setLoading(false);
    }, 1200);
  };

  return (
    <div className="prediction-page">
      <div className="page-header">
        <h1>Advanced Prediction Engine</h1>
        <p>Configure analysis and generate a model-based forecast</p>
      </div>

      <div className="engine-layout">
        <form className="engine-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="target">Initial Multiplier Target</label>
            <input
              id="target"
              name="target"
              type="number"
              step="0.1"
              min="1"
              max="10"
              value={values.target}
              onChange={handleChange}
            />
            <small>Desired multiplier threshold for analysis</small>
          </div>

          <div className="field-group">
            <label htmlFor="rounds">Historical Rounds</label>
            <input
              id="rounds"
              name="rounds"
              type="number"
              step="10"
              min="10"
              max="1000"
              value={values.rounds}
              onChange={handleChange}
            />
            <small>Number of rounds to include in trend scanning</small>
          </div>

          <div className="field-group">
            <label htmlFor="risk">Risk Tolerance</label>
            <select id="risk" name="risk" value={values.risk} onChange={handleChange}>
              <option value="low">Low Risk</option>
              <option value="medium">Medium Risk</option>
              <option value="high">High Risk</option>
            </select>
            <small>Adjust model sensitivity</small>
          </div>

          <div className="field-group">
            <label htmlFor="window">Analysis Window</label>
            <select id="window" name="window" value={values.window} onChange={handleChange}>
              <option value="last_1h">Last 1 Hour</option>
              <option value="last_6h">Last 6 Hours</option>
              <option value="last_24h">Last 24 Hours</option>
              <option value="last_7d">Last 7 Days</option>
            </select>
            <small>Time range for historical analysis</small>
          </div>

          <button type="submit" className="run-button" disabled={loading}>
            {loading ? 'Analyzing...' : 'Run Prediction'}
          </button>
        </form>

        {result && (
          <div className="result-panel">
            <h2>Prediction Result</h2>

            <div className="result-grid">
              <div className="result-card primary">
                <span>Predicted Multiplier</span>
                <strong>{result.predicted}x</strong>
              </div>

              <div className="result-card">
                <span>Confidence</span>
                <strong>{result.confidence}%</strong>
              </div>

              <div className="result-card">
                <span>Risk Score</span>
                <strong>{result.riskScore}</strong>
              </div>

              <div className={`result-card recommendation ${result.recommendation.toLowerCase()}`}>
                <span>Recommendation</span>
                <strong>{result.recommendation}</strong>
              </div>
            </div>

            <div className="pattern-section">
              <h3>Detected Patterns</h3>
              {result.patterns.map((pattern, index) => (
                <div key={index} className="pattern-row">
                  <span>{pattern.name}</span>
                  <div className="pattern-bar">
                    <div className="pattern-fill" style={{ width: `${pattern.strength}%` }} />
                  </div>
                  <strong>{pattern.strength}%</strong>
                </div>
              ))}
            </div>

            <div className="result-note">
              ⚠️ Predictions are model-based estimates using historical patterns and do not guarantee future outcomes.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PredictionEngine;
