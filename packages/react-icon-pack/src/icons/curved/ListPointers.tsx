import * as React from 'react';
import type { SVGProps } from 'react';
const SvgListPointers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 7.25a.75.75 0 0 1 .75.75v.01a.75.75 0 1 1-1.5 0V8A.75.75 0 0 1 5 7.25M7.25 8A.75.75 0 0 1 8 7.25h11a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8M5 11.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75m2.25.75a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M5 15.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V16a.75.75 0 0 1 .75-.75m2.25.75a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgListPointers;
