// import file 
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AllService = (props) => {
    const { name, Mentor, price, img, Duration, rating } = props.allService;

    return (
        <div>

            <Card style={{ width: '20rem', backgroundColor: "" }} className="shadow-lg rounded  mt-3">
                <div className="p-2 rounded">
                    <Card.Img variant="top" src={img} className="h-25 mx-auto" />
                </div>
                <Card.Body>
                    <Card.Title> <span className="text-info">Course Name: </span>{name}</Card.Title>
                    <Card.Text>
                        <h6> <span className="text-info">Course Mentor: </span> {Mentor}</h6>
                        <h6> <span className="text-info">Course Duration: </span> {Duration}</h6>
                        <h6> <span className="text-info">Course Rating: </span> {rating}</h6>
                        <h6> <span className="text-info">Course Fee: </span> {price} tk</h6>
                    </Card.Text>
                    <div className="d-flex  justify-content-between">
                        <Button variant="success">Course Outline</Button>
                        <Button variant="primary">Enroll Now</Button></div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllService;