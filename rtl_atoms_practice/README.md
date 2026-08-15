# Bakery Atoms Practice

A "Bakery Menu" page built from 4 small atom components, each with its own
React Testing Library tests.

## Run

```bash
npm install
npm run dev     # view the bakery menu page
npm run test    # run the RTL tests
```

## Page

`src/App.tsx` renders a menu of 3 bakery items, each built from the atoms
below — price with an optional discount, stock status, a quantity stepper,
and a star rating.

## Atoms (src/components/atoms)

| Atom | What it does | Tests |
|---|---|---|
| `PriceTag` | Shows the price, plus a struck-through original price when there's a discount | 4 |
| `StockLabel` | Shows "In Stock", "Only N left", or "Out of Stock" based on quantity | 4 |
| `QuantityStepper` | Increment/decrement buttons with min/max limits | 5 |
| `RatingStars` | Shows filled/empty stars out of 5, rounded to the nearest star | 4 |

Each test file sits next to its component as `index.test.tsx`.
