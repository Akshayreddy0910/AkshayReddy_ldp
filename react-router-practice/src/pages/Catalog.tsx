import { Link } from "react-router-dom";

export const ITEMS = [
  { id: "1", title: "The Quiet Algorithm", price: "$18" },
  { id: "2", title: "Notes on Drifting Code", price: "$22" },
  { id: "3", title: "A Field Guide to Routers", price: "$15" },
];

const Catalog = () => {
  return (
    <section className="view">
      <h1>Catalog</h1>
      <ul className="card-list">
        {ITEMS.map((item) => (
          <li key={item.id} className="card">
            <Link to={`/catalog/${item.id}`}>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
