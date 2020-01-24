import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>

        <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="hello" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>After years of experience in the field of audiovisual post-production, the desire to face new challenges naturally led me to consider the code not only as a passion but as a real life opportunity. Self-taught learning of web programming basics confirmed my enthusiasm for creating web applications, and the intensive training at Le Wagon gave me the knowledge and the skills to successfully start this new professional adventure.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Cecile Rougnaux</span><br />
                  <span>30 rue des trois bornes<br />
                   75011 Paris, France
                  </span><br />
                  <span>(0033)623 842 387 </span><br />
                  <span>cecile_rougnaux@hotmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      </React.Fragment>
    );
  }
}
