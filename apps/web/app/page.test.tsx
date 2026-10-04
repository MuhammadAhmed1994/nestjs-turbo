/*
[Doc-Spec] Homepage H1 — comment-only file (no imports, no executable code)

Acceptance intent:
- [AC-3] The home route "/" renders a semantic level-1 heading whose accessible name is exactly "EM Hackathon".

Example (for documentation only — do not execute):

import { render, screen } from '@testing-library/react'
import Page from './page'

describe('[AC-3] home page heading', () => {
  it('[AC-3] renders a level-1 heading named "EM Hackathon"', () => {
    render(<Page />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'EM Hackathon' })
    ).toBeInTheDocument()
  })
})

*/
