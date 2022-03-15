import { Link } from 'react-router-dom'

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer>
        <article className='copyright-app'>Sky Tracker App &copy; 2021-{year} <a href="https://github.com/fannysofia">fannysofia</a></article>
        <article className='copyright-img'>Images &copy; <a href="https://www.vecteezy.com/free-vector/nature">Nature Vectors by Vecteezy</a></article>
        <nav className='footer-nav'>
          <Link to="/sky-tracker-app">Home</Link>
          <Link to="/sky-tracker-app/about">About</Link>
          <a href="https://github.com/fannysofia/sky-tracker-app">View project on GitHub</a>
        </nav>
    </footer>
  )
}

export default Footer