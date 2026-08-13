import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <section className="view">
      <h1>404 — Nothing here</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Back to landing</Link>
    </section>
  );
};

export default Missing;
