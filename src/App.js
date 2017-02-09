import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './styles/styles.scss'

class App extends Component {

  openOrCloseMobileMenu = (event) => {
    let sandwich  = ReactDOM.findDOMNode(this.refs.mobileMenu),
        ulMenu = ReactDOM.findDOMNode(this.refs.ulMenu);

    sandwich.classList.toggle('menu-is-open');
    ulMenu.classList.toggle('is-visible');

  };

  render() {
    return (
      <div className="App">
        <div className="fullscreen">
          <a name="home" id="home"></a>
          <header>
            <a href="/" className="logo">
              VR
            </a>
            <div className="popup-nav">
              <a className="trigger" ref="mobileMenu" onClick={this.openOrCloseMobileMenu}>
                <span></span>
              </a>
              <nav>
                <ul className="" ref="ulMenu">
                  <li>
                    <a href="#home" data-scroll="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-scroll="">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" data-scroll="">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" data-scroll="">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#achievements" data-scroll="">
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a href="#blog" data-scroll="">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#contact" data-scroll="">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <nav>
              <ul>
                <li className="active">
                  <a href="#home" data-scroll="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" data-scroll="">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" data-scroll="">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#portfolio" data-scroll="">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#achievements" data-scroll="">
                    Achievements
                  </a>
                </li>
                <li>
                  <a href="#blog" data-scroll="">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" data-scroll="">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="hero">
            <h2>
              WELCOME TO MY WEBSITE
            </h2>
            <h1>
              VIKAS REDDY
            </h1>
            <h2>
              PROBLEM SOLVER
            </h2>
          </div>
        </div>
        <div className="below-fullscreen">
          <a name="about" id="about"></a>
          <section>
            <h3>
              <span>
                About Me
              </span>
            </h3>
            <ul className="paragraphs">
              <li>
                <p>
                  <span
                  >WHO I AM
                  </span>
                  <span>
                    I’m an avid programmer from India, passionate about code, design, startups and technology. I like reading, travelling and food.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    WHAT I DO
                  </span>
                  <span>
                    I create websites, build servers, learn to craft Android applications and play with Sketch to design great UIs.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    WORK
                  </span>
                  <span>
                    I work for a brilliant startup called <a target="_blank" href="https://glider.ai" target="_blank">Glider</a>,
                    where my distributed team and I help people transform their dream jobs into careers through Artificial Intelligence.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    FREE TIME
                  </span>
                  <span>
                    In my free time I read, travel, think and participate in meetups, conferences or hackathons.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    QUESTIONS
                  </span>
                  <span>
                    You can ask me about my hobbies, projects, skills, lifestyle or anything that might come through your mind <a href="https://wiselike.com/alexandru-rosianu">
                      on Wiselike
                    </a>.
                  </span>
                </p>
              </li>
            </ul>
          </section>
          <img alt="Vikas Reddy" class="me" src="img/quote.jpg" />
          <a name="skills" id="skills"></a>
          <section>
            <h3>
              <span>
                Skills
              </span>
            </h3>
            <ul className="skills">
              <li>
                <p>
                  <span>
                    WEB
                  </span>
                  <span>
                    SASS/LESS/CSS/CSS3
                    <br />HTML/HTML5/Handlebars
                      <br />ECMAScript 6
                        <br /><br />
                          Javascript, jQuery, AngularJS
                          <br />React, Redux
                          <br />MeteorJS
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    BACKEND
                  </span>
                  <span>
                    Node.js, Express, REST
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    DEVOPS, DB
                  </span>
                  <span>
                    AWS &amp; Heroku
                    <br />NoSQL/SQL Databases
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    OTHERS
                  </span>
                  <span>
                    Testing, Agile Development
                    <br />Grunt/webpack
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    STILL LEARNING
                  </span>
                  <span>
                    Android Dev, UX/UI Design
                    <br />Machine Learning
                    <br />GraphQL
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    WHAT I USE
                  </span>
                  <span>
                    Webstorm, Sublime, Android Studio
                  </span>
                </p>
              </li>
            </ul>
          </section>
          <a name="portfolio" id="portfolio"></a>
          <section className="inverted">
            <h3>
              <span>
                Portfolio
              </span>
            </h3>
            <div className="row">
              <div className="item">
                <a href="http://www.aluxian.com">
                  <img src="/portfolio_1.png" width="400" height="250" alt="Aluxian.com" /></a>
                <footer>
                  <span>
                    <a href="http://www.aluxian.com">vikasreddy.com</a>
                  </span>
                </footer>
              </div>
            </div>
          </section>
          <a name="achievements" id="achievements"></a>
          <section>
            <h3>
              <span>
                Achievements
              </span>
            </h3>
            <ul className="achievements">
              <li>
                <p>
                  10 January 2016
                </p>
                <p>
                  Finished <a href="http://aluxian.github.io/Tweeather/">
                  Tweeather
                </a>, a ML project
                </p>
              </li>
            </ul>
          </section>
          <a name="blog" id="blog"></a>
          <section className="inverted">
            <h3>
              <span>
                Recent Blog Posts
              </span>
            </h3>
            <ul className="posts">
              <li>
                <p>
                  <a href="https://blog.aluxian.com/dropbox-cli-how-to-whitelist-folders-for-selective-sync/">
                    Dropbox CLI: How to whitelist folders for selective sync
                  </a>
                </p>
                <p>
                  11 Jul 2016 on Tips, Tutorials
                </p>
              </li>
              <li>
                <p>
                  <a href="https://blog.aluxian.com/how-i-hacked-codementor-to-build-an-android-app/">
                    How I hacked Codementor to build an Android app
                  </a>
                </p>
                <p>
                  22 Jan 2016 on Android, Codementor
                </p>
              </li>
              <li>
                <p>
                  <a href="https://blog.aluxian.com/tweeather-what-why-and-how/">
                    Tweeather – What, Why and How?
                  </a>
                </p>
                <p>
                  16 Jan 2016 on Machine Learning
                </p>
              </li>
            </ul>
          </section>
          <a name="contact" id="contact"></a>
          <footer>
            <hr />
            <p>Proudly hosted on <a href="https://github.com/Aluxian/aluxian.com">GitHub</a>.<br />Designed and coded with ♥ by me.</p>
            <hr />
            <ul className="social">
              <li>
                <a href="https://plus.google.com/+AlexandruRosianu" title="Google+">
                  <svg viewBox="0 0 80 80">
                    <g fill="#fff">
                      <ellipse stroke-width="4" cx="40" cy="40" rx="38" ry="38"></ellipse>
                      <path d="M60 39.4L55.6 39.4 55.6 35 53.4 35 53.4 39.4 49 39.4 49 41.6 53.4 41.6 53.4 46 55.6 46 55.6 41.6 60 41.6 60 39.4M37.2 57C32.2 57 29 54.7 29 51.4 29 48.2 32 47.1 33 46.7 34.9 46.1 37.5 46 37.9 46 38.3 46 38.6 46 38.9 46 42.5 48.5 44 49.7 44 52.1 44 54.9 41.6 57 37.2 57L37.2 57ZM36.7 39C32.8 39 31 33.9 31 30.9 31 29.7 31.2 28.3 32 27.4 32.7 26.5 34 26 35.2 26 39 26 41 31.1 41 34.4 41 35.2 40.9 36.6 39.9 37.6 39.1 38.3 37.9 39 36.7 39L36.7 39ZM43.9 43.9L42.2 42.6C41.7 42.2 41 41.6 41 40.6 41 39.6 41.7 39 42.3 38.4 44.3 36.9 46.3 35.3 46.3 31.9 46.3 28.4 44.1 26.7 43 25.8L45.9 25.8 49 24 39 24C36.4 24 32.9 24.3 30.1 26.4 28.1 28.1 27.4 30.6 27.4 32.7 27.4 36.3 30.3 39.9 35.4 39.9 35.9 39.9 36.4 39.9 36.9 39.8 36.7 40.4 36.4 40.8 36.4 41.6 36.4 43 37.2 43.9 37.9 44.7 35.7 44.9 31.7 45.1 28.7 46.8 25.9 48.4 25 50.8 25 52.4 25 55.8 28.2 59 35.2 59 43.5 59 48 54.6 48 50.3 48 47.1 46 45.6 43.9 43.9L43.9 43.9Z"></path></g></svg></a></li><li><a href="https://www.facebook.com/aluxian" title="Facebook"><svg viewBox="0 0 80 80"><g fill="#fff"><ellipse stroke-width="4" cx="40" cy="40" rx="38" ry="38"></ellipse><path d="M42.3 57L42.3 41 47.9 41 48.8 34.8 42.3 34.8 42.3 30.8C42.3 29 42.9 27.8 45.6 27.8L49 27.8 49 22.2C48.4 22.2 46.4 22 44 22 39 22 35.6 24.9 35.6 30.2L35.6 34.8 30 34.8 30 41 35.6 41 35.6 57 42.3 57"></path></g></svg></a></li><li><a href="https://twitter.com/Aluxian" title="Twitter"><svg viewBox="0 0 80 80"><g fill="#fff"><ellipse stroke-width="4" cx="40" cy="40" rx="38" ry="38"></ellipse><path d="M53.9 31.7C55.4 30.8 56.5 29.3 57 27.6 55.6 28.4 54.1 29.1 52.5 29.4 51.2 27.9 49.3 27 47.2 27 43.3 27 40.1 30.4 40.1 34.6 40.1 35.2 40.1 35.7 40.2 36.3 34.3 36 29 33 25.4 28.4 24.8 29.5 24.5 30.8 24.5 32.2 24.5 34.8 25.7 37.1 27.7 38.5 26.5 38.5 25.4 38.1 24.4 37.6 24.4 37.6 24.4 37.6 24.4 37.6 24.4 41.3 26.9 44.4 30.2 45.1 29.6 45.2 28.9 45.3 28.3 45.3 27.8 45.3 27.4 45.3 26.9 45.2 27.8 48.2 30.5 50.4 33.6 50.5 31.2 52.5 28.1 53.7 24.7 53.7 24.1 53.7 23.6 53.7 23 53.6 26.2 55.7 30 57 34 57 47.2 57 54.4 45.5 54.4 35.5 54.4 35.1 54.4 34.8 54.4 34.5 55.8 33.4 57 32.1 58 30.6 56.7 31.2 55.3 31.6 53.9 31.7Z"></path></g></svg></a></li><li><a href="https://github.com/Aluxian" title="GitHub"><svg viewBox="0 0 80 80"><g fill="#fff"><ellipse stroke-width="4" cx="40" cy="40" rx="38" ry="38"></ellipse><path d="M29 47.5C29.7 48.1 30.1 48.8 30.1 48.8 30.1 48.9 30.2 48.9 30.2 49L30.2 49C30.2 49 30.2 49 30.1 49 30 49.2 30 49.5 30.1 49.7 30.3 50 30.7 50.1 30.9 50 30.9 49.9 30.9 49.9 30.9 49.9 32.5 51.3 34.4 50.7 35.2 50.3 35.4 49.1 35.8 48.3 36.3 47.9 32.4 47.4 28.3 45.9 28.3 39 28.3 37 29 35.4 30.1 34.2 30 33.7 29.4 31.9 30.3 29.4 30.3 29.4 31.8 29 35.1 31.3 36.5 30.9 38 30.7 39.5 30.7 41 30.7 42.5 30.9 43.9 31.3 47.2 29 48.7 29.4 48.7 29.4 49.6 31.9 49 33.7 48.9 34.2 50 35.4 50.7 37 50.7 39 50.7 45.9 46.6 47.4 42.7 47.9 43.3 48.4 43.9 49.5 43.9 51.2 43.9 53.6 43.8 55.5 43.8 56.1 43.8 56.6 44.2 57.1 45 57 52 54.6 57 47.9 57 39.9 57 30 49.2 22 39.5 22 29.8 22 22 30 22 39.9 22 47.9 27 54.6 34 57 34.8 57.1 35.2 56.6 35.2 56.1 35.2 55.7 35.1 54.3 35.1 52.8 30.3 53.9 29.2 50.6 29.2 50.6 28.4 48.6 27.3 48 27.3 48 25.7 46.9 27.4 46.9 27.4 46.9 27.7 47 27.9 47 28.1 47.1 28.1 47.1 28 47.2 28 47.2 27.9 47.5 28.1 47.8 28.4 47.9 28.6 48.1 28.9 48 29 47.8 29 47.7 29 47.6 29 47.5ZM28.9 48.9C28.7 49.1 28.4 49 28.2 48.8 28 48.5 27.9 48.2 28.1 48.1 28.3 47.9 28.6 48 28.8 48.2 29 48.5 29.1 48.8 28.9 48.9ZM30.9 51.9C30.8 52.1 30.5 52 30.2 51.8 30 51.6 29.9 51.3 30.1 51.1 30.2 50.9 30.5 51 30.8 51.2 31 51.4 31.1 51.7 30.9 51.9ZM33 51.7C32.9 52 32.7 52.1 32.4 52 32.1 51.8 32 51.6 32 51.3 32.1 51 32.3 50.9 32.6 51 32.9 51.2 33 51.4 33 51.7ZM34 51.5C34 51.8 33.8 52 33.5 52 33.2 52 33 51.8 33 51.5 33 51.2 33.2 51 33.5 51 33.8 51 34 51.2 34 51.5ZM35 51.4C35 51.6 34.8 51.9 34.6 52 34.3 52.1 34 51.9 34 51.6 34 51.4 34.2 51.1 34.4 51 34.7 50.9 35 51.1 35 51.4Z"></path></g></svg></a></li><li><a href="https://www.linkedin.com/in/AlexandruRosianu" title="LinkedIn"><svg viewBox="0 0 80 80"><g fill="#fff"><ellipse stroke-width="4" cx="40" cy="40" rx="38" ry="38"></ellipse><g transform="translate(23, 22)" fill="#000"><path d="M4.6 0.6C6.7 0.6 8.5 2.4 8.5 4.6 8.5 6.8 6.7 8.5 4.6 8.5 2.4 8.5 0.6 6.8 0.6 4.6 0.6 2.4 2.4 0.6 4.6 0.6L4.6 0.6ZM1.2 11.5L8 11.5 8 33.4 1.2 33.4 1.2 11.5ZM12.2 11.5L18.7 11.5 18.7 14.5 18.8 14.5C19.7 12.8 21.9 11 25.2 11 32.1 11 33.4 15.5 33.4 21.4L33.4 33.4 26.6 33.4 26.6 22.7C26.6 20.2 26.5 16.9 23.1 16.9 19.5 16.9 19 19.7 19 22.5L19 33.4 12.2 33.4 12.2 11.5"></path></g></g></svg></a></li><li><a href="mailto:me@aluxian.com" title="Email"><svg viewBox="0 0 80 80"><g fill="#fff"><ellipse stroke-width="4" cx="40" cy="40" rx="38" ry="38"></ellipse><path d="M45 40.4L58 50 58 28 45 40.4 45 40.4ZM23 28L23 50 36 40.4 23 28 23 28ZM40.5 45.2L37.5 42 23 52 58 52 43.5 42 40.5 45.2 40.5 45.2ZM57 28L24 28 40.5 42 57 28 57 28Z"></path></g></svg></a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
