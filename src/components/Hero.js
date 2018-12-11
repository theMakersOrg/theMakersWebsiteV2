import React from 'react'
import hero from '../img/hero.svg'

const Hero = class extends React.Component {
  render() {
    return <img src={hero} alt="theMakers.org" style={{ width: '1024px' }} />
  }
}
export default Hero
