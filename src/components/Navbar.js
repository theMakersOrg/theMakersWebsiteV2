import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/Hero'

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <div>
        <Hero />
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <hr class="navbar-divider" />
          <div className="container">
            <div className="navbar-brand">
              {/* Hamburger menu */}
              <div className="navbar-burger burger" data-target="navMenu">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start">
                <Link className="navbar-item is-link" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item is-link" to="/bios">
                  Maker Bios
                </Link>
                <Link className="navbar-item is-link" to="/events">
                  Events
                </Link>
                <Link className="navbar-item is-link" to="/contact">
                  Contact
                </Link>
              </div>
              {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
