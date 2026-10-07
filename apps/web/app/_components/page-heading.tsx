import styles from './page-heading.module.css';

/**
 * The one and only heading on the `/` route.
 *
 * The copy is a hardcoded literal string — never data-bound — so the heading
 * prerenders as static markup with no runtime dependency.
 */
export function PageHeading() {
  return <h1 className={styles.heading}>Hello Good Morning.</h1>;
}
