type QuantityStepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

const QuantityStepper = ({ value, onChange, min = 1, max = 10 }: QuantityStepperProps) => {
  return (
    <div className="stepper">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
      >
        −
      </button>
      <span>{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};

export default QuantityStepper;
