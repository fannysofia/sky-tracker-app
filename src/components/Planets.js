import Planet from './Planet'

const Planets = ({ location, planets, loading }) => {
  return (
    <>
      <section className="planet-wrap">
        <article className='visible-planets-wrap'>
            <h2 className='visible-planets-title'>Visible celestial objects in {location.name}, {location.sys.country}</h2>
        </article>
        <section className="planet-wrap-inner"> 
        {!loading ? 
          planets.length > 0 ? (planets.map((planet) => (
            <Planet 
              key={planet.name}
              planetName={planet.name}
              nakedEyeObject={planet.nakedEyeObject.toString() ? 'Visible with binoculars or telescope' : 'Visible to naked eye'}
            />
          ))) :
            <h3>No visible planets at the moment</h3>
        : <h3>Please wait. Loading...</h3>
        } 
        </section>
      </section>
    </>
  )
}

export default Planets