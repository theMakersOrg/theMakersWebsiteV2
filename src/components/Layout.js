import React from 'react'
//import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SEO from './SEO'
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Navbar />
        <SEO />
        <div>{children}</div>
        <footer class="footer columns is-centered  has-background-light ">
          <div class="content has-text-centered column is-half">
            <p>
              <strong>TheMakers.org</strong> Designed, developed and deployed by{' '}
              <a href="https://kurtsch.com.au">Kurt Schoenhoff</a>.
            </p>
          </div>
        </footer>
      </div>
    )}
  />
)

export default TemplateWrapper
