import React, { useMemo } from 'react';
import './Dashboard.css';
import AnalyticsCard from '../components/AnalyticsCard';
import TrendChart from '../components/TrendChart';
import PredictionCard from '../components/PredictionCard';
import { mockTrendData, mockPredictions } from '../data/mockData';

function Dashboard() {
  const metrics = useMemo(
    () => ({
      trend: 12.4,
      confidence: 78,
      risk: 'Medium',
      winRate: 62.3,
      rounds: 1245,
    }),
    []
  );

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Live Analytics Dashboard</h1>
        <p>Real-time game analysis and prediction overview</p>
      </div>

      <section className="metrics-grid">
        <AnalyticsCard title="Trend Analysis" value={`${metrics.trend}%`} unit="Current Trend" icon="📈" color="#10b981" />
        <AnalyticsCard title="Prediction Confidence" value={`${metrics.confidence}%`} unit="Accuracy Score" icon="🎯" color="#7dd3fc" />
        <AnalyticsCard title="Risk Assessment" value={metrics.risk} unit="Current Level" icon="⚠️" color="#f59e0b" />
        <AnalyticsCard title="Win Rate" value={`${metrics.winRate}%`} unit="Historical Average" icon="🏆" color="#6ee7b7" />
      </section>

      <section className="chart-panel">
        <h2>Multiplier Trend vs Prediction</h2>
        <TrendChart data={mockTrendData} />
      </section>

      <section className="prediction-panel">
        <h2>Active Predictions</h2>
        <div className="prediction-grid">
          {mockPredictions.map((prediction) => (
            <PredictionCard key={prediction.id} prediction={prediction} />
          ))}
        </div>
      </section>

      <section className="stats-panel">
        <h3>Session Statistics</h3>
        <div className="stats-grid">
          <div><strong>Rounds analyzed:</strong> {metrics.rounds}</div>
          <div><strong>Model version:</strong> v3.2.1</div>
          <div><strong>Last update:</strong> 2 sec ago</div>
          <div><strong>Data points:</strong> 45,230</div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
