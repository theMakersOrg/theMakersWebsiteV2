import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query BioQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
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
                makerName
                templateKey
                description
                image1 {
                  ... on File {
                    childImageSharp {
                      fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                publishDate(formatString: "MMMM DD, YYYY")
                tags
              }
            }
          }
        }
      }
    `}
    render={data => (
      <blogpostsaslist>
        {data.allMarkdownRemark.edges.map(({ node: post }) => (
          <div
            className="content"
            style={{ border: '1px solid #333', padding: '2em 4em' }}
            key={post.id}
          >
            <div className="columns">
              <div className="column is-one-fifth">
                <Link
                  to={post.fields.slug}
                  //className="image thumbnail"
                  title={post.frontmatter.makerName + ' at the makers'}
                >
                  <Img fluid={post.frontmatter.image1.childImageSharp.fluid} />
                </Link>
              </div>
              <div className="column ">
                <h3>
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.makerName}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.publishDate}</small>
                  </p>
                </h3>
                <h5>{post.frontmatter.description}</h5>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
                {post.frontmatter.tags && post.frontmatter.tags.length ? (
                  <div>
                    <h4>Tags</h4>
                    <ul className="taglist">
                      {post.frontmatter.tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </blogpostsaslist>
    )}
  />
)
