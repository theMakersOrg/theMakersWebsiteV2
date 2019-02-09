import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const ContactPageTemplate = ({
  content,
  contentComponent,
  location,
  electronic
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="column is-half">
      <div className="content">
        <Img fluid={location.image.childImageSharp.fluid} />
      </div>
      <div className="content">
        <p>{location.address}</p>
        <p>{location.description}</p>
      </div>
      <div className="content">
        <ul>
          <li>
            Facebook: <a href={electronic.facebook}>{electronic.facebook}</a>
          </li>
          <li>
            Email: <a href={electronic.email}>{electronic.email}</a>
          </li>
          <li>Phone: {electronic.phone}</li>
          <li>
            GitHub: <a href={electronic.github}>{electronic.github}</a>
          </li>
        </ul>
      </div>
      <div>
        <PageContent className="content" content={content} />
      </div>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  location: PropTypes.object,
  electronic: PropTypes.object
}

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  // const ContactPage  = ({ data }) => {
  //   const { markdownRemark: post } = data

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const { data } = this.props
    return (
      ///////////////////////////////////////////
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <ContactPageTemplate
                contentComponent={HTMLContent}
                content={data.markdownRemark.html}
                location={data.markdownRemark.frontmatter.location}
                electronic={data.markdownRemark.frontmatter.electronic}
              />

              <div className="column">
                <div className="content">
                  <h1>Email</h1>
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Your name
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Email
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button className="button is-link" type="submit">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
}

// ContactPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     })
//   })
// }

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        location {
          address
          image {
            ... on File {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          description
        }
        electronic {
          facebook
          email
          phone
          github
        }
      }
    }
  }
`
