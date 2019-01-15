import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const SponsorGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    <div className="columns is-centered">
      <div className="column ">
        <h3 className="has-text-weight-semibold is-size-3">Sponsors</h3>
        <p>Please support our sponsors, they support us. :)</p>

        {gridItems.map(item => (
          <div key={item.text} className="column is-3">
            <section className="section">
              <div className="has-text-centered">
                <div
                  style={{
                    width: '120px',
                    display: 'inline-block'
                  }}
                >
                  <h3 classname="has-text-grey">{item.heading}</h3>
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
              </div>
              <p>{item.text}</p>
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
