import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function TrendChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
        <XAxis dataKey="time" stroke="#b9c3d6" />
        <YAxis stroke="#b9c3d6" />
        <Tooltip
          contentStyle={{
            background: '#111827',
            color: '#edf2ff',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 12,
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="multiplier" stroke="#7dd3fc" strokeWidth={2} name="Actual" dot={{ r: 4 }} />
        <Line type="monotone" dataKey="prediction" stroke="#6ee7b7" strokeWidth={2} name="Predicted" strokeDasharray="5 5" dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TrendChart;
