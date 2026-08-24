import { useState } from "react";
import PriceTag from "./components/atoms/PriceTag";
import StockLabel from "./components/atoms/StockLabel";
import QuantityStepper from "./components/atoms/QuantityStepper";
import RatingStars from "./components/atoms/RatingStars";

type Item = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  stock: number;
  rating: number;
};

const items: Item[] = [
  { id: 1, name: "Chocolate Croissant", price: 90, originalPrice: 120, stock: 3, rating: 4.6 },
  { id: 2, name: "Sourdough Loaf", price: 180, stock: 0, rating: 4.2 },
  { id: 3, name: "Blueberry Muffin", price: 70, stock: 25, rating: 3.8 },
];

const App = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>(
    Object.fromEntries(items.map((item) => [item.id, 1]))
  );

  return (
    <div>
      <h1>Bakery Menu</h1>

      {items.map((item) => (
        <div className="menu-item" key={item.id}>
          <h3>{item.name}</h3>
          <RatingStars rating={item.rating} />
          <p>
            <PriceTag price={item.price} originalPrice={item.originalPrice} />
          </p>
          <StockLabel quantity={item.stock} />
          <div style={{ marginTop: "0.5rem" }}>
            <QuantityStepper
              value={quantities[item.id]}
              onChange={(value) => setQuantities({ ...quantities, [item.id]: value })}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
