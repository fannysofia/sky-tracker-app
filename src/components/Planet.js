import PlanetImage from './PlanetImage'

const Planet = ({ planetName, nakedEyeObject }) => {
  return (
    <article className="planet-item">
      <div className='planet-img'>
        <PlanetImage planet={planetName} />
      </div>
      <h3 className='planet-title'>{planetName}</h3>
      <p className='planet-visible'>{nakedEyeObject}</p>
    </article>
  )
}

export default Planet