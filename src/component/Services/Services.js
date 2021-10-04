// import file 
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {/* <h2>no of services {services.length}</h2> */}
            <h3 className="text-center mt-2">Our Premium Courses</h3>
            <div className="service-style">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;