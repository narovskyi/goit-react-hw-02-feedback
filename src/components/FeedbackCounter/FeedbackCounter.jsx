import React, { Component } from "react";
import Statistics from "components/Statistics";
import FeedbackOptions from "components/FeedbackOptions";
import Section from "components/Section";
import Notification from "components/Notification";

class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  } 

  handleFeedbackButtonClick = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1
      }
    });
  }
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0 ? 0 : Math.round((((this.state.good * 1) + (this.state.neutral * 0.5)) / this.countTotalFeedback()) * 100);
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section
          title={'Please leave feedback'}
          children={<FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedbackButtonClick}
          />}
        />
        {this.countTotalFeedback() === 0
          ? <Notification message={"There is no feedback"} />
          : <Section
              title={'Statistics'}
              children={<Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />}
            />
        }
      </>
    );
  }; 
}

export default FeedbackCounter;