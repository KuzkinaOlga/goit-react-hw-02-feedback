import React from 'react';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map((arNum, index) => {
      return (
        <button
          key={index}
          type="button"
          name={arNum}
          value={arNum}
          onClick={onLeaveFeedback}
        >
          {arNum}
        </button>
      );
    })}
  </div>
);

export default Feedback;
