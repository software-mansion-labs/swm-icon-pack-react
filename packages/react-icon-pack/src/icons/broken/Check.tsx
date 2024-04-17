import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.53 6.47a.75.75 0 0 1 0 1.06l-8.5 8.5a.75.75 0 0 1-1.06-1.06l8.5-8.5a.75.75 0 0 1 1.06 0m-17.06 6a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheck;
