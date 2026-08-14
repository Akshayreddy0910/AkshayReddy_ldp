type PriceTagProps = {
  price: number;
  originalPrice?: number;
};

const formatPrice = (value: number) => `₹${value.toFixed(2)}`;

const PriceTag = ({ price, originalPrice }: PriceTagProps) => {
  const hasDiscount = originalPrice !== undefined && originalPrice > price;

  return (
    <span className="price">
      {hasDiscount && <span className="original">{formatPrice(originalPrice)}</span>}
      {formatPrice(price)}
    </span>
  );
};

export default PriceTag;
