import imgMoon from '.././assets/img/img-moon.png'
import imgUranus from '.././assets/img/img-uranus.png'
import imgVenus from '.././assets/img/img-venus.png'
import imgNeptune from '.././assets/img/img-neptune.png'
import imgJupiter from '.././assets/img/img-jupiter.png'
import imgMercury from '.././assets/img/img-mercury.png'
import imgMars from '.././assets/img/img-mars.png'
import imgSaturn from '.././assets/img/img-saturn.png'

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