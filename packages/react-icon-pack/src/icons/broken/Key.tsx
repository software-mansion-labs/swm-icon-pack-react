import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.53 2.47a.75.75 0 0 1 0 1.06L19.06 6l1.47 1.47a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0L15 10.06l-2.296 2.296A5.23 5.23 0 0 1 13.75 15.5a5.23 5.23 0 0 1-.885 2.917.75.75 0 0 1-1.247-.834 3.752 3.752 0 0 0-3.12-5.833 3.751 3.751 0 0 0 0 7.5.75.75 0 0 1 0 1.5 5.251 5.251 0 0 1 0-10.5c1.18 0 2.27.39 3.146 1.046l2.82-2.82.006-.006.005-.006 2.989-2.989.006-.005.005-.006L20.47 2.47a.75.75 0 0 1 1.06 0M18 7.06 16.06 9l.94.94L18.94 8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKey;
