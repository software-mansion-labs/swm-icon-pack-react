import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCast = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 5A.75.75 0 0 1 3 4.25h18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5.75H3.75V8a.75.75 0 0 1-1.5 0zm0 6a.75.75 0 0 1 .75-.75A8.75 8.75 0 0 1 11.75 19a.75.75 0 0 1-1.5 0A7.25 7.25 0 0 0 3 11.75a.75.75 0 0 1-.75-.75m18.75.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1 0-1.5h6.25V12a.75.75 0 0 1 .75-.75M2.25 15a.75.75 0 0 1 .75-.75A4.75 4.75 0 0 1 7.75 19a.75.75 0 0 1-1.5 0A3.25 3.25 0 0 0 3 15.75a.75.75 0 0 1-.75-.75M3 18.24a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCast;
