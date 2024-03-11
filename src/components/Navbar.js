import React from 'react'
import PropTypes from 'prop-types'

//react function based components.
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.aboutText}</a>
      </li>

    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}
// we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. if i have not assigned value in app.js and not even default value tht time error.
Navbar.propTypes={title:PropTypes.string.isRequired,
        aboutText: PropTypes.string
}

// Default Prop Values :define default values for your props by assigning to the special defaultProps property:
// Specifies the default values for props. When i did not pass in app.js value for title and about.
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText:'About'
};