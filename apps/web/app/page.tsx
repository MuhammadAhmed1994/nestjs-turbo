/**
 * Home route `/` — static "Hello Good Morning." greeting.
 *
 * Server Component only: no 'use client', no data fetching, no dynamic
 * functions, so `next build` prerenders this route statically (AC-2).
 * The palette is locked to the app's own #0A0A0A canvas with #EDEDED type;
 * the existing --font-geist-sans variable from the root layout is reused
 * (no font packages added). Styling is inline so the page owns zero
 * extra files, components, or client-side JS.
 */
export default function Home() {
  return (
    <main
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(24px, 5vw, 48px)',
        background: '#0A0A0A',
        color: '#EDEDED',
        fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(40px, 7vw, 56px)',
          lineHeight: 1.07,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          textAlign: 'center',
        }}
      >
        Hello Good Morning.
      </h1>
    </main>
  );
}
