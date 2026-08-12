import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section className="view">
      <h1>Chapter</h1>
      <p>A small SPA built to practice React Router: static routes, nested layouts, dynamic params, and a catch-all fallback.</p>
      <Link className="view-cta" to="/catalog">
        Browse the catalog &rarr;
      </Link>
    </section>
  )
}

export default Landing
