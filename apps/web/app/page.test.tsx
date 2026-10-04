/**
 * Doc-spec for Home page heading
 *
 * [AC-1] The homepage route "/" renders a single semantic <h1>
 *        whose text content is exactly "EM Hackathon".
 *
 * [AC-3] Expectation (documentation-only): assert a level 1 heading
 *        named "EM Hackathon" is present when rendering the page.
 *
 * Example (non-executable, for illustration only):
 *   // import { render, screen } from '@testing-library/react'
 *   // import Page from './page'
 *   // it('[AC-1] renders level-1 heading "EM Hackathon"', () => {
 *   //   render(<Page />)
 *   //   expect(
 *   //     screen.getByRole('heading', { level: 1, name: 'EM Hackathon' })
 *   //   ).toBeInTheDocument()
 *   // })
 *
 * Notes:
 * - This file is intentionally comment-only per constraint C-3: no test runner setup
 *   or executable tests are introduced in this task; verification is via build and review.
 * - Placement rule: the <h1> is inserted as the first child inside <main> in app/page.tsx.
 */
