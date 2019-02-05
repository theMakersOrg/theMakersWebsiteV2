import React from 'react'
import hero from '../img/hero.svg'

const Hero = class extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <img src={hero} alt="theMakers.org" style={{ width: '254px' }} />
        </div>
      </div>
    )
  }
}
export default Hero
