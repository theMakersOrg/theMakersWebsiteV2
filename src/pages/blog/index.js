import React from 'react'
import Layout from '../../components/Layout'
import BlogPostsAsList from '../../components/BlogPostsAsList'
export default class BlogsPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">
                theMakers.org Blog
              </h1>
              <h2>Latest and greatest from the makerspace and beyond..</h2>
              <p>
                Here lies a collection of news about the makerspace and making
                in general. If you think we are missinmg something from our news
                please let us know. :)
              </p>
            </div>
            <BlogPostsAsList />
          </div>
        </section>
      </Layout>
    )
  }
}
