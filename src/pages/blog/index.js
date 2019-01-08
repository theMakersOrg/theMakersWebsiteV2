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
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            <BlogPostsAsList />
          </div>
        </section>
      </Layout>
    )
  }
}
