import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback() {
    let total = 0;
    for (let key in this.state) total += this.state[key];
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total > 0) return Math.round((this.state.good / total) * 100, 0);
  }

  onLeaveFeedback = event => {
    const feedback = event.target.name;

    this.setState(oldState => ({
      [feedback]: oldState[feedback] + 1,
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}
