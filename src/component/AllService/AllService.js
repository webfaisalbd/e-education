// import file 
import React from 'react';

const AllService = (props) => {
    const { name, Mentor, price, img, Duration } = props.allService;
    const serviceStyle = {
        border: '3px',
        boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
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

export default AllService;