/**
 * [AC-3] Doc-spec: The home page renders a single level-1 heading named "EM Hackathon".
 * [AC-1] Behavior: The "/" route renders a semantic <h1> whose text content is exactly "EM Hackathon".
 *
 * No test runner is configured for apps/web; this file is intentionally comment-only to document
 * the expected behavior without executing tests.
 *
 * Example assertion (non-executable, for documentation only):
 *
 * import { render, screen } from '@testing-library/react'
 * import Page from './page'
 *
 * it('[AC-3] renders level-1 heading "EM Hackathon"', () => {
 *   render(<Page />)
 *   expect(
 *     screen.getByRole('heading', { level: 1, name: 'EM Hackathon' })
 *   ).toBeInTheDocument()
 * })
 */
