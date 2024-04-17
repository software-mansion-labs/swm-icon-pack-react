import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 3.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M7.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M20 6.25a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m0 6a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V13a.75.75 0 0 1 .75-.75M3.25 19A4.75 4.75 0 0 1 8 14.25h8A4.75 4.75 0 0 1 20.75 19v2a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM8 15.75A3.25 3.25 0 0 0 4.75 19v1.25h14.5V19A3.25 3.25 0 0 0 16 15.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserWarning;
