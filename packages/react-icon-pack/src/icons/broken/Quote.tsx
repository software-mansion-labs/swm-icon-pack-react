import * as React from 'react';
import type { SVGProps } from 'react';
const SvgQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.5 7.75a2.75 2.75 0 0 0 0 5.5.75.75 0 0 1 .53.22l2.22 2.22V10.5A2.75 2.75 0 0 0 6.5 7.75M2.25 10.5a4.25 4.25 0 0 1 8.5 0v7a.75.75 0 0 1-1.28.53l-3.293-3.292A4.25 4.25 0 0 1 2.25 10.5M16.5 7.75a2.75 2.75 0 1 0 0 5.5.75.75 0 0 1 .53.22l2.22 2.22V10.5a2.75 2.75 0 0 0-2.75-2.75m-4.25 2.75a4.25 4.25 0 0 1 8.5 0v7a.75.75 0 0 1-1.28.53l-3.293-3.292A4.25 4.25 0 0 1 12.25 10.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgQuote;
