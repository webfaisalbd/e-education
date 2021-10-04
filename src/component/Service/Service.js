import React from 'react';

const Service = (props) => {
    const { name, Mentor, price, img, Duration } = props.service;
    const serviceStyle = {
        border: '3px',
        boxShadow: '3px 3px red, -1em 0 .4em olive',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={serviceStyle}>
            <img src={img} className="w-50" alt="" />
            <h4>Course Name: {name}</h4>
            <h6>Course Mentor: {Mentor}</h6>
            <h6>Course Mentor: {Duration}</h6>
            <h6>Price: {price}</h6>
        </div>
    );
};

export default Service;