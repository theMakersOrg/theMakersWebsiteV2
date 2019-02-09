import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                templateKey
                date(formatString: "MMMM DD, YYYY")
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
            <p>
              <Link className="has-text-primary" to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className="button is-small" to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </div>
        ))}
      </blogpostsaslist>
    )}
  />
)
