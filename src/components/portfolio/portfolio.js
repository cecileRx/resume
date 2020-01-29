import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
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
                  <a href="#modal-02" title>
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
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/shake.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Shake</h5>
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
            <img className="scale-with-grid" src="images/portfolio/modals/camelove_modal.png" alt="homepage" />
            <div className="description-box">
              <h4>CameLove</h4>
              <p>A market-place for llamas lovers! Designed, implemented and shipped to production</p>
              <p><a href="https://camelove.herokuapp.com" target="_blank" >Visit the website</a></p>
              <span className="categories"><i className="fa fa-tag" />Ruby on Rails, Javascript</span>
            </div>
            <div className="link-box">
              <a href= "https://github.com/paultursuru/camelove" target="_blank">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/yup_modal.png" alt="" />
            <div className="description-box">
              <h4>Yup!</h4>
              <p>Finally understand how to grow this red thing ! 🍅 </p> <p>Designed, implemented with FullCalendar.js and Stripe and shipped to production</p>
              <p><a href="http://www.yoururbanpotager.com/" target="_blank">Visit the website</a></p>
              <span className="categories"><i className="fa fa-tag" />Ruby on Rails, Javascript</span>
            </div>
            <div className="link-box">
              <a href= "https://github.com/paultursuru/yup" target="_blank">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-shake.png" alt="" />
            <div className="description-box">
              <h4>Shake</h4>
              <p>Time for a drink? Say a word and let the barman makes the rest!</p>
              <span className="categories"><i className="fa fa-tag" />Ruby on Rails</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/cecileRx/rails-mister-cocktail">Github</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
        </div>
      </section>

      </React.Fragment>
    );
  }
}
