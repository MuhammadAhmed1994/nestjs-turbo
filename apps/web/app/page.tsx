import { PageHeading } from './_components/page-heading';

/**
 * Static home page for the `/` route.
 *
 * Renders exactly one semantic <main> wrapping the single H1 heading
 * "Hello Good Morning." (trailing period included) and nothing else — no
 * header, footer, nav, links or subheadings.
 *
 * This is a plain synchronous Server Component: no data fetching, no client
 * JS and no page-level metadata, so the root layout's metadata is inherited
 * and the route prerenders as static markup.
 */
export default function Home() {
  return (
    <main>
      <PageHeading />
    </main>
  );
}
