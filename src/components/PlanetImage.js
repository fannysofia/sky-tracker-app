import imgMoon from '.././images/img-moon.png'
import imgUranus from '.././images/img-uranus.png'
import imgVenus from '.././images/img-venus.png'
import imgNeptune from '.././images/img-neptune.png'
import imgJupiter from '.././images/img-jupiter.png'
import imgMercury from '.././images/img-mercury.png'
import imgMars from '.././images/img-mars.png'
import imgSaturn from '.././images/img-saturn.png'

const PlanetImage = ({ planet }) => {
  return (
    <>
    {planet === 'Moon' &&
      <img src={imgMoon} alt='' height='90px'/>
    }
    {planet === 'Uranus' &&
      <img src={imgUranus} alt='' height='90px'/>
    }
    {planet === 'Venus' &&
      <img src={imgVenus} alt='' height='90px'/>
    }
    {planet === 'Neptune' &&
      <img src={imgNeptune} alt='' height='90px'/>
    }
    {planet === 'Jupiter' &&
      <img src={imgJupiter} alt='' height='90px'/>
    }
    {planet === 'Mercury' &&
      <img src={imgMercury} alt='' height='90px'/>
    }
    {planet === 'Mars' &&
      <img src={imgMars} alt='' height='90px'/>
    }
    {planet === 'Saturn' &&
      <img src={imgSaturn} alt='' height='90px'/>
    }
    </>
  )
}

export default PlanetImage