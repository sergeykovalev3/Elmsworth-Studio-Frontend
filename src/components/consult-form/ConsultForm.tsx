import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import './ConsultForm.css'

export function ConsultForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submit = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })
      if (!res.ok) {
        throw new Error('Could not send request')
      }
    },
  })

  return (
    <form
      className="consult-form"
      onSubmit={(e) => {
        e.preventDefault()
        submit.mutate()
      }}
    >
      <input
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        required
        placeholder="Tell us about the project"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={submit.isPending}>
        {submit.isPending ? 'Sending…' : 'Send request'}
      </button>
      {submit.isSuccess ? <p>Thanks — we will be in touch.</p> : null}
      {submit.isError ? <p>Could not send. Is the API running?</p> : null}
    </form>
  )
}
