import React from "react";
import PropTypes from 'prop-types';
import { Item } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => (
    <>
        <Item>Good: <span>{good}</span></Item>
        <Item>Neutral: <span>{neutral}</span></Item>
        <Item>Bad: <span>{bad}</span></Item>
        <Item>Total: <span>{total}</span></Item>
        <Item>Positive feedback: <span>{positivePercentage}%</span></Item>
    </>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;