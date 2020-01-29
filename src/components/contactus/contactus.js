import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
export default class Contactus extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'cecile_rougnaux@hotmail.com',
      subject: subject,
      message_html: message,
     }

    emailjs.send(
      'gmail',
      'template_3hZYrKYh',
       templateParams,
      'user_y95qIZkvhPexZcDKniGwp'
    ).then(res => {
      alert('Your message has been successfully sent, thanks!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => alert('Sorry, a problem occurred. Please send directly your message to cecile_rougnaux@hotmail.com'))

     this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render() {
    return (
      <React.Fragment>

       <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Let me know if you have a proposition for the dream job, any kind of suggestion, idea, or just to say hello!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form onSubmit={this.handleSubmit.bind(this)} >
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, 'name')}
                    />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, 'email')}
                    />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, 'subject')}
                   />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea
                  cols={50} rows={15}
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this, 'message')}
                  />
                </div>
                <div>
                  <button className="submit" type="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form> {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Cécile Rougnaux<br />
                30 rue des 3 bornes <br />
                75011 Paris<br />
                <span>(0033)623 842 387</span>
              </p>
            </div>
          </aside>
        </div>
      </section>


      </React.Fragment>
    );
  }
}
