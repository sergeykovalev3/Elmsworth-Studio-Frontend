import assert from 'node:assert/strict'
import { test } from 'node:test'
import { documentTitle } from './page-title.ts'

test('the home tab is the studio name', () => {
  assert.equal(documentTitle('/'), 'Elmsworth Studio')
})

test('a known page uses its own name', () => {
  assert.equal(documentTitle('/contact'), 'Contact')
  assert.equal(documentTitle('/about'), 'About us')
  assert.equal(documentTitle('/maintenance/garden-maintenance'), 'Garden Maintenance')
})

test('a project or a note supplies its own title', () => {
  assert.equal(documentTitle('/projects/court-millvale'), null)
  assert.equal(documentTitle('/blog/lawn-after-rain'), null)
})
