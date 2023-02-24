import React from 'react';
import { H1 } from "../components/UI/heading";
import Container from "react-bootstrap/Container";

const DefaultTemplate = (props) => {
    const {title: pageTitle, children} = props

    return (
        <div className="App">
            <H1>{pageTitle}</H1>

            <Container>
                {children}
            </Container>
        </div>
    )
};

DefaultTemplate.defaultProps = {
    title: 'Page Tile'
}

export default DefaultTemplate;