import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className="pricing-table columns">
    {data.map(price => (
      <div
        key={price.plan}
        className={'pricing-plan column is-one-quarter ' + price.colour}
      >
        <div className="plan-header">{price.plan}</div>
        <div className="plan-price">
          <span class="plan-price-amount">
            <span class="plan-price-currency">$</span>
            {price.price}
          </span>
          /{price.period}
        </div>

        <div className="plan-items">
          {price.items.map(item => (
            <div key={item} className="plan-item">
              {item}
            </div>
          ))}
          <div className="plan-footer">{price.description}</div>
        </div>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array
    })
  )
}

export default Pricing
