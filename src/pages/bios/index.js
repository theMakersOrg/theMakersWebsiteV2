import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class BiosPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Maker Bios</h1>
            </div>
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #333', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.name}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.publishDate}</small>
                </p>
                <div className="columns">
                  <div className="column is-one-fifth">
                    <Link
                      to={post.fields.slug}
                      className="image thumbnail"
                      title={post.frontmatter.name + ' at the makers'}
                    >
                      <img
                        src={post.frontmatter.image1}
                        alt={post.frontmatter.name + ' at the makers'}
                      />
                    </Link>
                  </div>
                  <div className="column ">
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

BiosPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query BioQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___publishDate] }
      filter: { frontmatter: { templateKey: { eq: "bio-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            name
            templateKey
            image1
            publishDate(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
