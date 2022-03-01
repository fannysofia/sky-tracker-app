const GetPlanets = ({ planets }) => {
  return (
    <>
      <section className="planet-wrap">
        {planets.map((planet) => (
          <Planet 
            key={planet.name}
            planetName={planet.name}
            nakedEyeObject={planet.nakedEyeObject.toString() ? 'Visible with binoculars or telescope' : 'Visible to naked eye'}
          />
          ))}
      </section>
    </>
  )
}

export default GetPlanets