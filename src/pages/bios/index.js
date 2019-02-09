import React from 'react'
import Layout from '../../components/Layout'
import BiosPostsAsList from '../../components/BioPostsAsList'

export default class BiosPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Maker Bios</h1>
              <h2>here is a quick look at some of our makers...</h2>
            </div>
            <BiosPostsAsList />
          </div>
        </section>
      </Layout>
    )
  }
}
