import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.38 5.085C4.27 5.947 3.75 7.392 3.75 10c0 1.82.255 3.074.781 3.955.506.847 1.32 1.441 2.67 1.816a.75.75 0 0 1 .549.723v2.695l2.732-2.732a.75.75 0 0 1 .55-.22q.465.013.968.013c3.436 0 5.45-.424 6.62-1.335 1.109-.862 1.63-2.307 1.63-4.915s-.521-4.053-1.63-4.915C17.45 4.174 15.436 3.75 12 3.75s-5.45.424-6.62 1.335M4.459 3.9C6.067 2.65 8.554 2.25 12 2.25s5.933.4 7.541 1.65c1.671 1.3 2.209 3.355 2.209 6.1s-.538 4.8-2.209 6.1c-1.608 1.25-4.095 1.65-7.541 1.65q-.349 0-.684-.006L7.53 21.53A.75.75 0 0 1 6.25 21v-3.955c-1.34-.468-2.342-1.209-3.007-2.32-.732-1.226-.993-2.806-.993-4.725 0-2.745.538-4.8 2.209-6.1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessageSquare;
