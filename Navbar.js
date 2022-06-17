import React from 'react'
import PropTypes from 'prop-types';


function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <a className="navbar-brand" href="/">{props.heading}</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">{props.homemenu}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.About}</a>
            </li>
          </ul>
        </div>
        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input" id="customSwitches" />
          <label className="custom-control-label" htmlFor="customSwitches">Enable dark mode</label>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

Navbar.propTypes = {
  heading: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
  homemenu: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  heading: 'Stranger',
  About: 'About us - default'
};