// import file 
import React from 'react';

const LiveSession = () => {
    return (
        <div className="heightStyle">

            {/* two division  */}

            <div className="row  mt-5">

                {/* left division for zoom  */}
                <div className="col-md-4">
                    <div className="ps-5">
                        <img className="img-fluid w-50" src="https://i.ibb.co/PgWKzDC/zoom-Teacher.png" alt="" />
                    </div>
                </div>

                {/* middle point  */}
                <div className="col-md-4">
                    <div className="text-center">
                        <h3>Live Session</h3>
                        <p>For week student,One to one communication</p>
                        <p>Taking feedback and implement this.</p>
                    </div>
                </div>

                {/* right division for meet  */}
                <div className="col-md-4">
                    <div className="ps-5">
                        <img className="img-fluid w-50" src="https://i.ibb.co/8Dq05rx/meet-Teacher.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveSession;