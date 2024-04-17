import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStopwatch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.25 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 3M12 5.75a7.25 7.25 0 0 0-4.795 12.688.75.75 0 1 1-.993 1.124A8.75 8.75 0 1 1 12 21.75a.75.75 0 0 1 0-1.5 7.25 7.25 0 1 0 0-14.5m0 2.5a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1-.22-.53V9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStopwatch;
