export type ConsultField = 'name' | 'email' | 'phone' | 'address'

const fieldError: Record<ConsultField, string> = {
  name: 'Enter your name.',
  email: 'Enter a valid email address.',
  phone: 'Enter a 10-digit phone number.',
  address: 'Enter the property address.',
}

export function consultFieldMessage(field: ConsultField, value: string) {
  const text = value.trim()
  if (field === 'name') return text.length >= 2 ? '' : fieldError.name
  if (field === 'email') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text) ? '' : fieldError.email
  }
  if (field === 'phone') {
    return text.replace(/\D/g, '').length >= 10 ? '' : fieldError.phone
  }
  return text.length >= 5 ? '' : fieldError.address
}
