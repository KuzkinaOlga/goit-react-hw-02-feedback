import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './feedback.module.css';

class Feedback extends Component {
  static propTypes = {
    state: PropTypes.arrayOf(
      PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //   onLeaveFeedback = e => {
  //     this.setState(prevState => ({
  //       [e]: prevState[e] + 1,
  //     }));
  //   };
  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const percentage = (good * 100) / (good + neutral + bad);
    return good ? Math.round(percentage) : 0;
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <div>
          <button className={css.button} onClick={this.goodIncrement}>
            Good
          </button>
          <button className={css.button} onClick={this.neutralIncrement}>
            Neutral
          </button>
          <button className={css.button} onClick={this.badIncrement}>
            Bad
          </button>
        </div>
        <p>Statistic</p>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.countTotalFeedback()}</p>
        <p>Positive percentage:{this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;
