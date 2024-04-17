import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.47 6.47a.75.75 0 0 1 1.06 0l8 8a.75.75 0 1 1-1.06 1.06L12 8.06l-7.47 7.47a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronUp;
