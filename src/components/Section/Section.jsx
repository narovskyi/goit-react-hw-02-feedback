import React from "react";
import PropTypes from 'prop-types';
import { Container, Title } from "./Section.styled";

const Section = ({title, children}) => (
    <Container>
        {title && <Title>{title}</Title>}
        {children}
    </Container>
)

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired
}

export default Section;