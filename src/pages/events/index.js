import React from 'react'
import Layout from '../../components/Layout'
import EventPostsAsList from '../../components/EventPostsAsList'

export default class EventsPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Maker Events</h1>
            </div>
            <EventPostsAsList />
          </div>
        </section>
      </Layout>
    )
  }
}
