import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export class App extends Component {
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
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />}
        />}
      </>
    );
  }; 
}

// export default App;