import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Sponsors from '../components/Sponsors'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Modal = ({ children, closeModal, modalState, title }) => {
  if (!modalState) {
    return null
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={closeModal}>
            Cancel
          </a>
        </footer>
      </div>
    </div>
  )
}

// Modal.propTypes = {
//   closeModal: React.PropTypes.func.isRequired,
//   modalState: React.PropTypes.bool.isRequired,
//   title: React.PropTypes.string
// }

const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
  sponsor
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <Hero />
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${
                    !!image.childImageSharp
                      ? image.childImageSharp.fluid.src
                      : image
                  })`
                }}
              >
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #21abe3, -0.5rem 0 0 #21abe3',
                    backgroundColor: '#21abe3',
                    color: 'white',
                    padding: '1rem'
                  }}
                >
                  {title}
                </h2>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3 is-secondary ">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="section">
                <div className="columns is-centered has-background-white-ter">
                  <div className="column is-10 ">
                    <h3 className="has-text-weight-semibold is-size-2 is-primary">
                      {intro.heading}
                    </h3>
                    <p>{intro.description.p1}</p>
                    <p>{intro.description.p2}</p>
                    <p>{intro.description.p3}</p>
                    <p>{intro.description.p4}</p>
                    <p>{intro.description.p5}</p>
                  </div>
                </div>
              </div>
              <div className="section">
                <Sponsors
                  gridItems={sponsor.sponsors}
                  heading={sponsor.heading}
                  description={sponsor.description}
                />
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image3} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image1} />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`
                }}
              />
              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount() {
    let visited = sessionStorage['alreadyVisited']
    if (!visited) {
      //this is the first time
      sessionStorage['alreadyVisited'] = true
      //this.setState({ viewPopup: true});
      setTimeout(
        function() {
          this.setState({ modalState: true })
        }.bind(this),
        20000
      )
    }
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState

      return { modalState: newState }
    })
  }

  render() {
    const { data } = this.props
    const { frontmatter } = data.allMarkdownRemark.edges[0].node

    return (
      <Layout>
        {/* {JSON.stringify(frontmatter.image)} */}
        {/* <a className="button is-primary" onClick={this.toggleModal}>
          Open Modal
        </a> */}
        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          title="Did you know about our Open Night?"
        >
          <div className="section">
            <h4>What is Open Night?</h4>
            <p>
              Open Night is where we open our space to all members of the public
              and get together to make and chat
            </p>

            <h4>When is Open Night?</h4>
            <p>Open Night happens every Thursday evening.</p>
            <p>Open Doors = 5:30pm</p>
            <p>Finish = Late (9/10pm)</p>

            <h4>What to bring?</h4>
            <p>Yourself!!! - Seriously, :)</p>
            <p>
              Feel free to bring anything you like to work on or show off
              previous creations, dont be shy!
            </p>
            <p>
              If you think you might get hungry we usually chip in and order
              pizza. ;)
            </p>

            <h4>What to wear?</h4>
            <p>
              Sensible attire for what you will be doing, covered footware is a
              must for the workshop, dont forget your safety equipment (if)for
              the work you wish to do.
            </p>
          </div>
          <div className="section">
            <h4>Where is Open Night?</h4>
            <p>We are Located at Y-102 at the Cairns TAFE.</p>
            <a href="/contact" className="button is-link is-rounded">
              Show me a map
            </a>
          </div>
        </Modal>
        <IndexPageTemplate
          image={frontmatter.image}
          title={frontmatter.title}
          heading={frontmatter.heading}
          description={frontmatter.description}
          intro={frontmatter.intro}
          main={frontmatter.main}
          testimonials={frontmatter.testimonials}
          fullImage={frontmatter.full_image}
          pricing={frontmatter.pricing}
          sponsor={frontmatter.sponsor}
        />
      </Layout>
    )
  }
}

IndexPageTemplate.propTypes = {
  image: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array
  })
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "landing-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image {
              ... on File {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            heading
            description
            intro {
              blurbs {
                image {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                text
                heading
              }
              heading
              description {
                p1
                p2
                p3
                p4
                p5
              }
            }
            sponsor {
              heading
              description
              sponsors {
                image {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                heading
                link
              }
            }
            main {
              heading
              description
              image1 {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 526, quality: 92) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              image2 {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 526, quality: 92) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              image3 {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 1075, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            testimonials {
              author
              quote
            }
            full_image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pricing {
              heading
              description
              plans {
                description
                items
                plan
                price
              }
            }
          }
        }
      }
    }
  }
`
