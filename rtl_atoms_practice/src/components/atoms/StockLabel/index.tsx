type StockLabelProps = {
  quantity: number;
  lowStockThreshold?: number;
};

const StockLabel = ({ quantity, lowStockThreshold = 5 }: StockLabelProps) => {
  if (quantity <= 0) {
    return <span className="stock out">Out of Stock</span>;
  }

  if (quantity <= lowStockThreshold) {
    return <span className="stock low">Only {quantity} left</span>;
  }

  return <span className="stock in">In Stock</span>;
};

export default StockLabel;
