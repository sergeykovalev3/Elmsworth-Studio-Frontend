import assert from 'node:assert/strict'
import { test } from 'node:test'
import { consultFieldMessage } from './consult-fields.ts'

test('consult fields accept a complete note', () => {
  assert.equal(consultFieldMessage('name', 'Ada'), '')
  assert.equal(consultFieldMessage('email', 'ada@elmsworth.studio'), '')
  assert.equal(consultFieldMessage('phone', '(571) 555-0148'), '')
  assert.equal(consultFieldMessage('address', '410 Elm Street'), '')
})

test('consult fields reject short or empty values', () => {
  assert.equal(consultFieldMessage('name', ' A '), 'Enter your name.')
  assert.equal(consultFieldMessage('email', 'ada@studio'), 'Enter a valid email address.')
  assert.equal(consultFieldMessage('phone', '571-555'), 'Enter a 10-digit phone number.')
  assert.equal(consultFieldMessage('address', 'Elm'), 'Enter the property address.')
})
