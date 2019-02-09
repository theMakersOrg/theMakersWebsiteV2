import React from 'react'
import hero from '../img/hero.svg'
import { Link } from 'gatsby'

const Hero = class extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <Link to="/" title="Logo">
            <img src={hero} alt="theMakers.org" style={{ width: '256px' }} />
          </Link>
        </div>
      </div>
    )
  }
}
export default Hero
