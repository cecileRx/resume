import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>

            <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Le Wagon Paris</h3>
                <p className="info"> FullStack developer Bootcamp <span>•</span> <em className="date">Dec 2019</em></p>
                  The 9 weeks of intensive coding bootcamp allowed me to understand the core concepts of object-oriented programing, through Ruby language. Building softwares from scratch, following MVC design pattern, I learned to design relational databases and build queries with SQL. All projects I built so far are based on Ruby on rails framework. For the front end part we learned the basics of ES6 Javascript and coded our own CSS library with recent techniques like Flexbox and CSS grid.  By pair-programing on a daily basis and collaborate within a team of developers for the final projects, I have definitely adopted the technical workflow followed by successful startups.
                <p>

                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Science Politiques Aix-en-Provence</h3>
                <p className="info">Master Information-Communication <span>•</span> <em className="date">Sept 2003</em></p>
                <p>
                  Besides learning political, economical and social sciences, I spent 9 months in Dakar, Sénégal, working for a daily newspaper as a journalist. This experience had a great effect on my abilities to be autonomous and highly adapative to any kind of situations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Video Editor</h3>
                <p className="info">Freelancer for Animation series <span>•</span> <em className="date">March 2012 - Present</em></p>
                <p>
                  Developed and managed projects from concept to completion, including storyboards, post-production editing and final delivery formats.
                  Reviewed and edited animation films by selecting best combination of performance, sequencing and timing to tell beautiful stories.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Post-production Supervisor</h3>
                <p className="info">Futurikon Animation Studio <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                <p>
                  Supervised production plannings while using appropriate tools and analysis for smooth production output.
                   Collaborated with artists and technicians to achieve stunning results for visual effects and 3D animation.
                  Evaluated quality problems and performed required actions to identify and resolve issues.

                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p> Among the soft skills that I have been able to acquire over the years, I would highlight great organization skills, attention to details, and a lot of perseverance. What I like most in the video editing process are the moments I work directly with the director, putting together the best of artistic and technical aspects to create a nice, coherent and original piece of work. I felt the same emulation when pair-programing at Le Wagon!
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand ruby" /><em>Ruby</em></li>
                <li><span className="bar-expand rails" /><em>Rails</em></li>
                <li><span className="bar-expand javascript" /><em>Javascript ES6</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand bootstrap" /><em>BOOTSTRAP</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand sql" /><em>SQL</em></li>
                <li><span className="bar-expand react" /><em>React</em></li>
                <li><span className="bar-expand git" /><em>GIT/GITHUB</em></li>
                <li><span className="bar-expand heroku" /><em>HEROKU</em></li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      </React.Fragment>
    );
  }
}
