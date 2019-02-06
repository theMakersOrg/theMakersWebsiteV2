import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import SEO from '../components/SEO'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'
import website from '../../config/website'

export const BioPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  image
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <div className="column is-one-quarter">
                <Img fluid={image.childImageSharp.fluid} />
              </div>
              <div className="column">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <p>{description}</p>
              </div>
            </div>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
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
    </section>
  )
}

BioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  image: PropTypes.image
}

const BioPost = ({ data }, location) => {
  const { markdownRemark: post } = data

  return (
    <Layout customSEO>
      <SEO
        title={`${post.frontmatter.title} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={post.frontmatter.description}
        banner={JSON.stringify(post.frontmatter.image1.url)}
        node={post}
        article
      />
      <BioPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.image1}
      />
    </Layout>
  )
}

BioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default BioPost

export const pageQuery = graphql`
  query BioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
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
`
