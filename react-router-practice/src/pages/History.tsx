const purchases = [
  { id: 'PUR-201', status: 'Delivered' },
  { id: 'PUR-202', status: 'In transit' },
  { id: 'PUR-203', status: 'Processing' },
]

const History = () => {
  return (
    <section className="view">
      <h1>Purchase history</h1>
      <ul className="detail-list">
        {purchases.map((purchase) => (
          <li key={purchase.id}>
            <strong>{purchase.id}</strong> — {purchase.status}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default History
