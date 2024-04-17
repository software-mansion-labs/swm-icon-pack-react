import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinusSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17 12.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMinusSmall;
