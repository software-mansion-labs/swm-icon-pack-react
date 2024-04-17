import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.47 8.47a.75.75 0 0 1 1.06 0L12 15.94l7.47-7.47a.75.75 0 1 1 1.06 1.06l-8 8a.75.75 0 0 1-1.06 0l-8-8a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDown;
