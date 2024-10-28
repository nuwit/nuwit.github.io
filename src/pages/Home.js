import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      {/* Heading Section */}
      <div id="heading">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-8 col-lg-offset-2" style={{ padding: '80px' }}>
              <h2>Northeastern Women in Technology</h2>
              <p>
                An <b>undergraduate</b> only Khoury organization dedicated to supporting women who study or are interested in
                Computer and Information Science at Northeastern University.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Header Wrap Section with Code Editor */}
      <div id="headerwrap">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="code-editor">
                <div className="top-bar">
                  <ul className="control">
                    <li className="button red"></li>
                    <li className="button yellow"></li>
                    <li className="button green"></li>
                  </ul>
                  <div className="file-path">~/Users/NUWIT/website</div>
                </div>
                <pre className="code">
                  <code>
                    <span className="comment">/* Welcome to NUWIT's website! */</span>
                    <br />
                    <span className="selector">#NUWIT</span> {'{'}
                    <br />
                    <span className="indent prop">stands-for:</span> Northeastern University Women in Technology;
                    <br />
                    <span className="indent prop">location:</span> Boston, MA;
                    <br />
                    <span className="indent prop">description:</span> An undergraduate only special interest group
                    <br />
                    <span className="indent prop">email:</span> url('nuwomenintech@gmail.com');
                    <br />
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="row centered">
            <a className="scroll-down" href="#mission">
              <i id="scroll-down" className="fa fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-8 col-lg-offset-2">
              <h2>Our Mission</h2>
              <p>
                We are Northeastern Women in Technology. We are an on-campus community that supports women interested in computer and information science and all things tech. We host tech talks, community events, and business leaders from around the Boston area on a weekly basis. Our goal is to create and inspire a strong campus community of women in technology fields. We bring support, networking, and mentoring to help women on our campus find success in the classroom and in the office.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meetings Section */}
      <div id="meetings">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-8 col-lg-offset-2">
              <h2>Join us!</h2>
            </div>
          </div>
          <div className="row centered">
            <br />
            <br />
            <div className="col-md-4 col-sm-4">
              <h4><i className="fa fa-calendar-o"></i> Every Tuesday</h4>
            </div>
            <div className="col-md-4 col-sm-4">
              <h4><i className="fa fa-clock-o"></i> 7:00pm - 8:00pm</h4>
            </div>
            <div className="col-md-4 col-sm-4">
              <h4><i className="fa fa-map-marker"></i> Richards Hall 300</h4>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;