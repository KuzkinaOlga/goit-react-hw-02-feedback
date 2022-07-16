import React from 'react';
import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Statistics</h2>
    {!total ? (
      <Notification message="There is no feedback" />
    ) : (
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
          <p>Positive percentage: {positivePercentage}%</p>
        </li>
      </ul>
    )}
  </div>
);
export default Statistics;
