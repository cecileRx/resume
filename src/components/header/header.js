import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>

      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Cécile Lougnaux</h1>
            <div className="sub-banner-text">
              <h3>I'm a Paris based <span>fullstack web developer </span><span>and video editor</span> creating awesome and
                effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about"> start scrolling </a>
                  and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
            </div>
            <ul className="social">
              <li><a href="https://twitter.com/CeclRx"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://github.com/cecileRx"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.linkedin.com/in/c%C3%A9cile-rougnaux-36999516"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              <li><a href="skype:cecile rougnaux?chat"><i className="fa fa-skype" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>

      </React.Fragment>
    );
  }
}
