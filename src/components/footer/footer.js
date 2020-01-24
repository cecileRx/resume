import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>

      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/c%C3%A9cile-rougnaux-36999516"><i className="fa fa-linkedin" /></a></li>
              <li><a href="skype:cecile rougnaux?chat"><i className="fa fa-skype" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2014 CeeVee</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>

      </React.Fragment>
    );
  }
}
