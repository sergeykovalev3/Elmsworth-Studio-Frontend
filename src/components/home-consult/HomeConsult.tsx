import { useRef, useState, type FormEvent } from 'react'
import { brandFull } from '../../brand'
import { consultFieldMessage, type ConsultField } from './consult-fields'
import { consultInterests } from './interests'
import './HomeConsult.css'

type Field = ConsultField

export function HomeConsult({ formOnly = false }: { formOnly?: boolean }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [picked, setPicked] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<Field, string>>({
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [invalid, setInvalid] = useState<Record<Field, boolean>>({
    name: false,
    email: false,
    phone: false,
    address: false,
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const thanksRef = useRef<HTMLDivElement>(null)

  function toggle(label: string) {
    setPicked((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    )
  }

  const values: Record<Field, string> = { name, email, phone, address }

  function check(field: Field, value = values[field]) {
    const message = consultFieldMessage(field, value)
    setInvalid((current) => ({ ...current, [field]: Boolean(message) }))
    if (message) {
      setErrors((current) => ({ ...current, [field]: message }))
    }
    return !message
  }

  async function submitForm(event: FormEvent) {
    event.preventDefault()
    const fields = Object.keys(values) as Field[]
    const nextInvalid = { ...invalid }
    const nextErrors = { ...errors }
    fields.forEach((field) => {
      const message = consultFieldMessage(field, values[field])
      nextInvalid[field] = Boolean(message)
      if (message) nextErrors[field] = message
    })
    setInvalid(nextInvalid)
    setErrors(nextErrors)
    if (fields.some((field) => nextInvalid[field]) || sending) return

    const services = picked.length > 0 ? picked.join(', ') : 'Not specified'
    setSending(true)
    setFailed(false)
    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: `Property: ${address.trim()}\nServices: ${services}`,
        }),
      })
      if (!res.ok) throw new Error('Could not send request')
    } catch {
      setFailed(true)
      setSending(false)
      return
    }
    setSending(false)

    const stage = stageRef.current
    const thanks = thanksRef.current
    if (stage && thanks) {
      stage.style.height = `${stage.offsetHeight}px`
    }
    setSent(true)
    requestAnimationFrame(() => {
      if (stage && thanks) {
        const style = getComputedStyle(stage)
        const pad =
          parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)
        stage.style.height = `${thanks.offsetHeight + pad}px`
      }
    })
  }

  const fields = (
      <form
        className="home-consult-form"
        noValidate
        aria-hidden={sent}
        onSubmit={submitForm}
      >
        {(
          [
            ['name', 'Name *', 'text', 'name', name, setName],
            ['email', 'Email *', 'email', 'email', email, setEmail],
            ['phone', 'Phone *', 'tel', 'tel', phone, setPhone],
            ['address', 'Property address *', 'text', 'street-address', address, setAddress],
          ] as const
        ).map(([field, label, type, autoComplete, value, setValue]) => (
          <label key={field} className={invalid[field] ? 'is-invalid' : undefined}>
            <span>{label}</span>
            <input
              type={type}
              autoComplete={autoComplete}
              value={value}
              aria-invalid={invalid[field] || undefined}
              onChange={(event) => {
                const next = event.target.value
                setValue(next)
                if (invalid[field]) check(field, next)
              }}
              onBlur={() => check(field)}
            />
            <em className={invalid[field] ? 'is-open' : undefined}>
              <span>{errors[field]}</span>
            </em>
          </label>
        ))}
        <fieldset className="home-consult-interests">
          <legend>Which services are you interested in?</legend>
          <div className="home-consult-checks">
            {consultInterests.map((label) => (
              <label key={label}>
                <input
                  type="checkbox"
                  checked={picked.includes(label)}
                  onChange={() => toggle(label)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <button
          type="submit"
          className={sending ? 'is-sending' : undefined}
          aria-busy={sending}
        >
          Submit
        </button>
        {failed ? (
          <p className="home-consult-legal">Could not send. Please try again.</p>
        ) : null}
        <p className="home-consult-legal">
          By submitting this form you agree we may contact you about the work.
          Reply STOP to opt out of texts if we send them.
        </p>
      </form>
  )

  const thanks = (
    <div ref={thanksRef} className="home-consult-thanks" aria-hidden={!sent}>
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="30" />
        <path d="M18 33.5 27.2 43 46 22" />
      </svg>
      <h3>Thank you</h3>
      <p>We have your note and will be in touch about the property.</p>
    </div>
  )

  if (formOnly) {
    return (
      <div
        ref={stageRef}
        className={sent ? 'home-consult-stage is-sent' : 'home-consult-stage'}
      >
        {fields}
        {thanks}
      </div>
    )
  }

  return (
    <section
      ref={stageRef}
      className={sent ? 'home-consult is-sent' : 'home-consult'}
    >
      <div className="home-consult-copy">
        <h2 className="home-consult-title">
          Walk the grounds with {brandFull}, and we will{' '}
          <span>tend them with you.</span>
        </h2>
        <p>Schedule a call and we will start from how you live outside.</p>
      </div>
      {fields}
      {thanks}
    </section>
  )
}
