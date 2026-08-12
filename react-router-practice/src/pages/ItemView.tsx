import { useParams, Link } from "react-router-dom";
import { ITEMS } from "./Catalog";

const ItemView = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const item = ITEMS.find((i) => i.id === itemId);

  if (!item) {
    return (
      <section className="view">
        <h1>Item not found</h1>
        <Link to="/catalog">Back to catalog</Link>
      </section>
    );
  }

  return (
    <section className="view">
      <h1>{item.title}</h1>
      <p>{item.price}</p>
      <Link to="/catalog">&larr; Back to catalog</Link>
    </section>
  );
};

export default ItemView;
