# Sky Tracker App

## Spiraling through space :flying_saucer:

Our solar system is made up of a star we call the Sun, eight planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune) and billions of other objects like dwarf planets (most known is Pluto), comets, asteroids and meteoroids. 

The whole solar system and its local stars orbits our spiral home galaxy, the Milky Way, at approximately 828,000 kph. It takes our solar system about 230 million years to complete one orbit around the galactic center. 

The planets in our solar system have more than 200 moons in their orbits. :full_moon:

So far, our solar system is the only one known to support life.

### Mercury

Mercury is closest to the Sun. :sunny: It is very hot on the sun side while the dark side can reach freezing temperature. Mercury is very cratered due to debris from comets, asteroids and so on. 

### Venus

Venus is the second planet in our solar system. It has high levels of carbon dioxide that result in a “runaway” greenhouse effect. This trapping of solar radiation results in very high temperatures. 

### Mars

Mars is the fourth planet in our solar system. It’s size is only 53% and weight 40% of Earth’s. Atmosphere is much thinner and also the temperature is much cooler. Researches have shown that water did flow on Mars in the past and it is still mixed with the soil in some regions of Mars. Soil analysis shows that Mars has been warmer and wetter in the past. 

### Jupiter

Jupiter is the largest of our planets. It has swirling clouds and Giant Red Spot (GRS) that is actually a super storm similar to hurricanes on Earth. Since there are no oceans and no land the GRS keeps sustaining its energy. 

### Saturn 🪐

Saturn wins the price for the most gorgeous rings. It has also clouds like Jupiter but they are more pale and not so outstanding. The main reason for this is the layer of haze that is mostly composed of ammonia. 

### Uranus

Uranus was first to thought to be a star when it was found in 1781. There is only little we know about it. 

### Neptune

Neptune has a fascinating cool-blue color that is resulting from higher percentage of methane in the atmosphere. Like Jupiter, Neptune has it’s own storm called the Great Dark Spot (GDS) and smaller storm below it called the Scooter. Neptune also has occasionally high-altitude methane-ice clouds. 

### Earth :earth_africa:

Earth is the fifth-largest planet in the solar system and third planet from the sun. Our home planet is unique for many reasons. Water and oxygen are two defining features. While we are orbiting the Sun, we are simultaneously spinning around an axis from the North Pole to the South Pole. It takes 23.934 hours to complete the axis rotation and 365.26 days to complete the orbit around the sun. 

## The mission

The idea of this project was to get more familiar with React and the solar system. 

Basic requirements I had for the project:
- [x] use React components
- [x] use at least 2 external APIs with several endpoints
* for planets: [Visible Planets API](https://github.com/csymlstd/visible-planets-api/)
* for location + weather: [OpenWeatherMap API](https://openweathermap.org/api/)
- [x] use React state variables
- [x] use SCSS styling
- [x] responsive design
- [x] accessible design
- [x] use GitHub and version control
- [x] deploy to GitHub Pages
- [x] documentation

I have been looking piles of astronomy and astrophysics books next to my workstation at home for years. Thanks to my spouse and his books, I have started to realize the fascinating aspects about the space.   

> For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much—the wheel, New York, wars and so on—whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons. 
*- Douglas Adams, The Hitchhiker's Guide to the Galaxy*

## Features 

The user should be able to: 
- [x] see the current date and time
- [x] enter a location
- [x] see the info of the current visible celestial objects in the location:
* the decorative image of the planet/moon
* if the object is visible to naked eye or binoculars/telescope only
- [x] get error message if the location is invalid
- [x] toggle the current weather info (mainly cloud coverage and visibility) in the location
- [x] navigate through sub-pages like About page

![Default application homepage](https://github.com/fannysofia/sky-tracker-app/blob/main/src/assets/img/app-default-img.png?raw=true)
- Fig 1. Default landing page with default location (Helsinki, Finland). Currently only one planet visible.

![User has set location to Los Angeles](https://github.com/fannysofia/sky-tracker-app/blob/main/src/assets/img/app-toggle-img-1.png?raw=true)
![User has toggled weather information](https://github.com/fannysofia/sky-tracker-app/blob/main/src/assets/img/app-toggle-img-2.png?raw=true)
- Fig 2-3. User has set a new location (Los Angeles, US ). Currently Several planets visible. Weather information is toggled at the end of home page.

These features could be implemented in the future:
- [ ] Set location based on user's geolocation
- [ ] Add isLoading (or not? https://kentcdodds.com/blog/stop-using-isloading-booleans)
- [ ] Expand the range of celestial objects to be shown (asteroids, sun etc.)
- [ ] Add other nice-to-have features like lunar phases
- [ ] Suggestion of the correct location if several locations found with same name
- [ ] Accessibility: WCAG 2.1 at Level AA

## Known issues

1. If the user enters location name that is presented in multiple countries, the first one will be used by default.
* In that case, user should define also the country abbreviation. For example: Instead of Melbourne, the user should type Melbourne, AU.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
