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

  handleClick = (event) => {
    var element = document.querySelectorAll('li.active');

    element[0].classList = '';
    event.target.parentElement.classList = 'active'
  };

  handleClickMobile = (event) => {
    let sandwich  = ReactDOM.findDOMNode(this.refs.mobileMenu),
      ulMenu = ReactDOM.findDOMNode(this.refs.ulMenu);

    sandwich.classList = 'trigger';
    ulMenu.classList = '';
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
                <ul className="" ref="ulMenu" id="ulMenu">
                  <li>
                    <a href="#home" data-scroll="" onClick={this.handleClickMobile}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-scroll="" onClick={this.handleClickMobile}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" data-scroll="" onClick={this.handleClickMobile}>
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" data-scroll="" onClick={this.handleClickMobile}>
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#achievements" data-scroll="" onClick={this.handleClickMobile}>
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a href="#experience" data-scroll="" onClick={this.handleClickMobile}>
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#contact" data-scroll="" onClick={this.handleClickMobile}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <nav>
              <ul id="ulMenu">
                <li className="active">
                  <a href="#home" data-scroll="" onClick={this.handleClick}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" data-scroll="" onClick={this.handleClick}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" data-scroll="" onClick={this.handleClick}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#portfolio" data-scroll="" onClick={this.handleClick}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#achievements" data-scroll="" onClick={this.handleClick}>
                    Achievements
                  </a>
                </li>
                <li>
                  <a href="#experience" data-scroll="" onClick={this.handleClick}>
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" data-scroll="" onClick={this.handleClick}>
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
            <h2 className="">
              FULL-STACK DEV
            </h2>
          </div>
          <div className="scroll">
            <p>
              <a href="#about" data-scroll="">
                FIND OUT MORE
              </a>
            </p>
            <a href="#about" data-scroll="">
              <svg viewBox="0 0 30 30">
                <g fill="#FFF">
                  <path d="M25.5 11L25.5 12 4.5 12 4.5 10 23.5 10 23.5-9 25.5-9 25.5 11Z" transform="translate(15.049242, 1.5) rotate(45) translate(-15.049242, -1.5)">
                  </path>
                  <path d="M25.5 24.3L25.5 25.3 4.5 25.3 4.5 23.3 23.5 23.3 23.5 4.3 25.5 4.3 25.5 24.3Z" transform="translate(15.049242, 14.849242) rotate(45) translate(-15.049242, -14.849242)">
                  </path>
                </g>
              </svg>
            </a>
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
                    You can ask me about my hobbies, projects, skills, lifestyle or anything that might come through your mind by clicking on <div className="chatIcon">chat icon</div> at the bottom.
                  </span>
                </p>
              </li>
            </ul>
          </section>
          <img alt="Vikas Reddy" className="me" src="/quote.jpg" />
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
                <a href="https://vikasreddy-15b6c.firebaseapp.com/" target="_blank">
                  <img src="/portfolio_1.png" width="400" height="250" alt="vikasreddy.com" /></a>
                <footer>
                  <span>
                    <a href="https://vikasreddy-15b6c.firebaseapp.com/" target="_blank">vikasreddy.com</a>
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
                  30 January 2017
                </p>
                <p>
                  Finished <a href="http://vikasreddy-15b6c.firebaseapp.com/" target="_blank">
                  My Profile
                </a>, a Reactjs project
                </p>
              </li>
            </ul>
          </section>
          <a name="experience" id="experience"></a>
          <section className="inverted">
            <h3>
              <span>
                Experience
              </span>
            </h3>
            <ul className="posts">
              <li>
                <p>
                  <a href="//snapwiz.com" target="_blank">
                    Associate software engineer - Snapwiz
                  </a>
                </p>
                <p>
                  18 May 2016 -- Present
                </p>
              </li>
              <li>
                <p>
                  <a href="//accenture.com" target="_blank">
                    Associate software engineer - Accenture
                  </a>
                </p>
                <p>
                  02 Jun 2014 -- 14 Aug 2015
                </p>
              </li>
            </ul>
          </section>
          <a name="contact" id="contact"></a>
          <footer>
            <hr />
            <p>Proudly hosted on <a href="https://github.com/vikasraj789/profile" target="_blank">GitHub</a>.<br />Coded with ♥ by me.</p>
            <hr />
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/vikasraj789" target="_blank" title="Facebook">
                  <svg viewBox="0 0 80 80">
                    <g fill="#fff">
                      <ellipse strokeWidth="4" cx="40" cy="40" rx="38" ry="38">

                      </ellipse>
                      <path d="M42.3 57L42.3 41 47.9 41 48.8 34.8 42.3 34.8 42.3 30.8C42.3 29 42.9 27.8 45.6 27.8L49 27.8 49 22.2C48.4 22.2 46.4 22 44 22 39 22 35.6 24.9 35.6 30.2L35.6 34.8 30 34.8 30 41 35.6 41 35.6 57 42.3 57"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/vikasraj789" target="_blank" title="Twitter">
                  <svg viewBox="0 0 80 80">
                    <g fill="#fff">
                      <ellipse strokeWidth="4" cx="40" cy="40" rx="38" ry="38">

                      </ellipse>
                      <path d="M53.9 31.7C55.4 30.8 56.5 29.3 57 27.6 55.6 28.4 54.1 29.1 52.5 29.4 51.2 27.9 49.3 27 47.2 27 43.3 27 40.1 30.4 40.1 34.6 40.1 35.2 40.1 35.7 40.2 36.3 34.3 36 29 33 25.4 28.4 24.8 29.5 24.5 30.8 24.5 32.2 24.5 34.8 25.7 37.1 27.7 38.5 26.5 38.5 25.4 38.1 24.4 37.6 24.4 37.6 24.4 37.6 24.4 37.6 24.4 41.3 26.9 44.4 30.2 45.1 29.6 45.2 28.9 45.3 28.3 45.3 27.8 45.3 27.4 45.3 26.9 45.2 27.8 48.2 30.5 50.4 33.6 50.5 31.2 52.5 28.1 53.7 24.7 53.7 24.1 53.7 23.6 53.7 23 53.6 26.2 55.7 30 57 34 57 47.2 57 54.4 45.5 54.4 35.5 54.4 35.1 54.4 34.8 54.4 34.5 55.8 33.4 57 32.1 58 30.6 56.7 31.2 55.3 31.6 53.9 31.7Z"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/vikasraj789" target="_blank" title="GitHub">
                  <svg viewBox="0 0 80 80">
                    <g fill="#fff">
                      <ellipse strokeWidth="4" cx="40" cy="40" rx="38" ry="38"></ellipse><path d="M29 47.5C29.7 48.1 30.1 48.8 30.1 48.8 30.1 48.9 30.2 48.9 30.2 49L30.2 49C30.2 49 30.2 49 30.1 49 30 49.2 30 49.5 30.1 49.7 30.3 50 30.7 50.1 30.9 50 30.9 49.9 30.9 49.9 30.9 49.9 32.5 51.3 34.4 50.7 35.2 50.3 35.4 49.1 35.8 48.3 36.3 47.9 32.4 47.4 28.3 45.9 28.3 39 28.3 37 29 35.4 30.1 34.2 30 33.7 29.4 31.9 30.3 29.4 30.3 29.4 31.8 29 35.1 31.3 36.5 30.9 38 30.7 39.5 30.7 41 30.7 42.5 30.9 43.9 31.3 47.2 29 48.7 29.4 48.7 29.4 49.6 31.9 49 33.7 48.9 34.2 50 35.4 50.7 37 50.7 39 50.7 45.9 46.6 47.4 42.7 47.9 43.3 48.4 43.9 49.5 43.9 51.2 43.9 53.6 43.8 55.5 43.8 56.1 43.8 56.6 44.2 57.1 45 57 52 54.6 57 47.9 57 39.9 57 30 49.2 22 39.5 22 29.8 22 22 30 22 39.9 22 47.9 27 54.6 34 57 34.8 57.1 35.2 56.6 35.2 56.1 35.2 55.7 35.1 54.3 35.1 52.8 30.3 53.9 29.2 50.6 29.2 50.6 28.4 48.6 27.3 48 27.3 48 25.7 46.9 27.4 46.9 27.4 46.9 27.7 47 27.9 47 28.1 47.1 28.1 47.1 28 47.2 28 47.2 27.9 47.5 28.1 47.8 28.4 47.9 28.6 48.1 28.9 48 29 47.8 29 47.7 29 47.6 29 47.5ZM28.9 48.9C28.7 49.1 28.4 49 28.2 48.8 28 48.5 27.9 48.2 28.1 48.1 28.3 47.9 28.6 48 28.8 48.2 29 48.5 29.1 48.8 28.9 48.9ZM30.9 51.9C30.8 52.1 30.5 52 30.2 51.8 30 51.6 29.9 51.3 30.1 51.1 30.2 50.9 30.5 51 30.8 51.2 31 51.4 31.1 51.7 30.9 51.9ZM33 51.7C32.9 52 32.7 52.1 32.4 52 32.1 51.8 32 51.6 32 51.3 32.1 51 32.3 50.9 32.6 51 32.9 51.2 33 51.4 33 51.7ZM34 51.5C34 51.8 33.8 52 33.5 52 33.2 52 33 51.8 33 51.5 33 51.2 33.2 51 33.5 51 33.8 51 34 51.2 34 51.5ZM35 51.4C35 51.6 34.8 51.9 34.6 52 34.3 52.1 34 51.9 34 51.6 34 51.4 34.2 51.1 34.4 51 34.7 50.9 35 51.1 35 51.4Z"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/in/vikas-reddy-91ba493a" target="_blank" title="LinkedIn">
                  <svg viewBox="0 0 80 80">
                    <g fill="#fff">
                      <ellipse strokeWidth="4" cx="40" cy="40" rx="38" ry="38"></ellipse><g transform="translate(23, 22)" fill="#000"><path d="M4.6 0.6C6.7 0.6 8.5 2.4 8.5 4.6 8.5 6.8 6.7 8.5 4.6 8.5 2.4 8.5 0.6 6.8 0.6 4.6 0.6 2.4 2.4 0.6 4.6 0.6L4.6 0.6ZM1.2 11.5L8 11.5 8 33.4 1.2 33.4 1.2 11.5ZM12.2 11.5L18.7 11.5 18.7 14.5 18.8 14.5C19.7 12.8 21.9 11 25.2 11 32.1 11 33.4 15.5 33.4 21.4L33.4 33.4 26.6 33.4 26.6 22.7C26.6 20.2 26.5 16.9 23.1 16.9 19.5 16.9 19 19.7 19 22.5L19 33.4 12.2 33.4 12.2 11.5"></path></g></g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:vikasraj789@gmail.com" title="Email"><svg viewBox="0 0 80 80">
                  <g fill="#fff"><ellipse strokeWidth="4" cx="40" cy="40" rx="38" ry="38"></ellipse><path d="M45 40.4L58 50 58 28 45 40.4 45 40.4ZM23 28L23 50 36 40.4 23 28 23 28ZM40.5 45.2L37.5 42 23 52 58 52 43.5 42 40.5 45.2 40.5 45.2ZM57 28L24 28 40.5 42 57 28 57 28Z"></path></g></svg></a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
