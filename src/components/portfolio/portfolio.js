import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works</h1>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" >
                    <img alt="" src="images/portfolio/nica_s.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Brava Coffee Roasters</h5>
                        <p>Ruby on Rails e-commerce app</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" >
                    <img alt="" src='images/portfolio/camelove.png'/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>camelove</h5>
                        <p>Ruby on Rails app</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" >
                    <img alt="hello" src="images/portfolio/yup.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta yup">
                        <h5>Your Urban Potager!</h5>
                        <p>Ruby on Rails app</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-brava.png" alt="" />
            <div className="description-box">
              <h4>Brava Coffee Roasters</h4>
              <p>Brava is a micro coffee roaster based in Lisbon. Beans are chosen among the best in the world, produced by agricultural communities with sustainable practices, ethically and environmentally.</p>
              <p><a href="https://www.bravacoffeeroasters.com/" target="_blank" rel="noreferrer" >Visit the website</a></p>

              <span className="categories"><i className="fa fa-tag" />Ruby on Rails, Javascript</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/cecileRx/BRAVA_COFFEES" target="_blank" rel="noreferrer">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/camelove_modal.png" alt="homepage" />
            <div className="description-box">
              <h4>CameLove</h4>
              <p>A market-place for llamas lovers! Designed, implemented and shipped to production</p>
              <p><a href="https://camelove.herokuapp.com" target="_blank" rel="noreferrer" >Visit the website</a></p>
              <span className="categories"><i className="fa fa-tag" />Ruby on Rails, Javascript</span>
            </div>
            <div className="link-box">
              <a href= "https://github.com/paultursuru/camelove" target="_blank" rel="noreferrer">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/yup_modal.png" alt="" />
            <div className="description-box">
              <h4>Yup!</h4>
              <p>Finally understand how to grow this red thing ! <span role="img">🍅</span> </p> <p>Designed, implemented with FullCalendar.js and Stripe and shipped to production</p>
              <p><a href="http://www.yoururbanpotager.com/" target="_blank" rel="noreferrer noreferrer">Visit the website</a></p>
              <span className="categories"><i className="fa fa-tag" />Ruby on Rails, Javascript</span>
            </div>
            <div className="link-box">
              <a href= "https://github.com/paultursuru/yup" target="_blank" rel="noreferrer">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
        </div>
      </section>

      </React.Fragment>
    );
  }
}
