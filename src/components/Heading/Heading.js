import React from 'react';
import "./Heading.css";

const Heading = ({ heading }) => {
    return (
        <>
            <h3 className="heading">{heading}</h3>
        </>
    );
};

export default Heading;