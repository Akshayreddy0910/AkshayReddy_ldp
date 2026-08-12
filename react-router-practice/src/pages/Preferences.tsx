import { useState } from 'react'

const Preferences = () => {
  const [digest, setDigest] = useState(true)

  return (
    <section className="view">
      <h1>Preferences</h1>
      <label className="form-field-inline">
        <input
          type="checkbox"
          checked={digest}
          onChange={(e) => setDigest(e.target.checked)}
        />
        Weekly reading digest
      </label>
      <p>Digest emails are {digest ? 'on' : 'off'}.</p>
    </section>
  )
}

export default Preferences
