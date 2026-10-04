/**
 * Doc-Spec: Homepage heading
 *
 * This file intentionally contains only comments. It documents the expected
 * behavior of apps/web/app/page.tsx without executing any tests or importing
 * any libraries.
 *
 * Acceptance Criteria documented here:
 * - [AC-1] The homepage route "/" renders a single semantic <h1> whose text
 *   content is exactly "EM Hackathon".
 * - [AC-3] The documentation expresses the expectation that the home page
 *   renders a level 1 heading named "EM Hackathon". No test tooling is added
 *   or executed for this app.
 *
 * Example (non-executable) assertion that would satisfy AC-1/AC-3:
 *
 *   import { render, screen } from '@testing-library/react'
 *   import Page from './page'
 *
 *   it('[AC-1] renders level-1 heading named "EM Hackathon"', () => {
 *     render(<Page />)
 *     expect(
 *       screen.getByRole('heading', { level: 1, name: 'EM Hackathon' })
 *     ).toBeInTheDocument()
 *   })
 *
 * Notes:
 * - This file is comment-only by design per task constraint C-3.
 * - Build verification uses: pnpm --filter web build
 */
