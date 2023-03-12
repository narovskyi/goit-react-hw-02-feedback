import React from "react";
import Section from "components/Section/Section";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
        {options.map((option) => (
            <button key={option} onClick={()=>{onLeaveFeedback(option)}}>{option}</button>
        ))}
    </>
);

export default FeedbackOptions;