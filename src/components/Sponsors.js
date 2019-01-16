import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const SponsorGrid = ({ gridItems, heading, description }) => (
  <div className="columns is-centered">
    <div className="column ">
      <h3 className="has-text-weight-semibold is-size-3">{heading}</h3>
      <p>{description}</p>
      <div className="columns is-multiline">
        {gridItems.map(item => (
          <div key={item.heading} className="column is-4">
            <section className="section">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="has-text-centered">
                  <div
                    style={{
                      width: '160px',
                      display: 'inline-block'
                    }}
                  >
                    <h3 className="has-text-grey">{item.heading}</h3>
                    <PreviewCompatibleImage imageInfo={item} />
                  </div>
                </div>
              </a>
            </section>
          </div>
        ))}
      </div>
    </div>
  </div>
)

SponsorGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      heading: PropTypes.string
    })
  )
}

export default SponsorGrid
