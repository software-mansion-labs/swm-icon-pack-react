import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 8.75c-.593 0-1.147.158-1.624.434a.75.75 0 1 1-.752-1.298A4.73 4.73 0 0 1 7 7.25h2a.75.75 0 0 1 0 1.5zM14.25 8a.75.75 0 0 1 .75-.75h2a4.75 4.75 0 1 1 0 9.5h-2a.75.75 0 0 1 0-1.5h2a3.25 3.25 0 0 0 0-6.5h-2a.75.75 0 0 1-.75-.75M3 11.25a.75.75 0 0 1 .75.75A3.25 3.25 0 0 0 7 15.25h2a.75.75 0 0 1 0 1.5H7A4.75 4.75 0 0 1 2.25 12a.75.75 0 0 1 .75-.75m4.25.75a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLink;
