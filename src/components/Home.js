import React from 'react';

export function Home() {
    return(
        <div className="container">
        <h1 id="ninaKoller">Nina Koller</h1>
        <h2 id="subHeading">Future Web Developer</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              id="profilePic"
              src="./assets/profilepic.jpg"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <p className="bio-text">
              I am a Business Systems Consultant working on the Wells Fargo API
              Gateway Team. In my spare time, I'm learning how to code. Currently I
              am completing a Full Stack Web Development certificate through the
              University of Minnesota.
            </p>
            <p>
              If you wish to contact me, please reach out either by email at
              nckoller@gmail.com or my phone number (612) 716-0904
            </p>
          </div>
        </div>
      </div>
    )
 
}
