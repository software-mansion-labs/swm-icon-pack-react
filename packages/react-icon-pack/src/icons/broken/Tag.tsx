import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.47 5.47A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8.31L3.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06zm9.78.53a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h12.25V6.75H18a.75.75 0 0 1-.75-.75M10 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M7.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTag;
