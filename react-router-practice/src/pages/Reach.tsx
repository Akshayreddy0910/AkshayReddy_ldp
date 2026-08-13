import { useState } from 'react'

const Reach = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="view">
      <h1>Get in touch</h1>
      {sent ? (
        <p>Thanks — your note was recorded (this demo doesn't send it anywhere).</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-field">
            Name
            <input type="text" required />
          </label>
          <label className="form-field">
            Message
            <textarea rows={4} required />
          </label>
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  )
}

export default Reach
