import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.47 5.47A.75.75 0 0 1 8 5.25h13a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.53-.22l-6-6a.75.75 0 0 1 0-1.06zm.84 1.28L3.06 12l5.25 5.25h11.94V6.75zm1.69 4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M7.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTag;
