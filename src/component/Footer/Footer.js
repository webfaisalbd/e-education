// import file 
import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {

    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="footer-container bg-info mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container">
                                <h3 className="p-2">E-education</h3>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu fw-bold">Home</li>
                                    <li className="footer-menu fw-bold">All Services</li>
                                    <li className="footer-menu fw-bold">Live Session</li>
                                    <li className="footer-menu fw-bold"> About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <div className="text-center">
                                    <h3 className="">Sign up for the new Learner</h3>
                                    <input
                                        className="footer-input"
                                        type="text"
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div className="phone d-flex align-items-center justify-content-center mt-2">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5 className="ps-2">+88 01685477114</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p className="ps-2">
                                            <br />  Savar,Dhaka,Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;