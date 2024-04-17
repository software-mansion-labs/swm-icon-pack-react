import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.25 4c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v1a.75.75 0 0 1-1.5 0V4a.25.25 0 0 0-.25-.25H9a.25.25 0 0 0-.25.25v4.25H20a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-3.25V21a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75v-2.25H4a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 4 8.25h3.25zm9.5 13.25h2.5v-7.5H4.75v7.5H8a.75.75 0 0 1 .75.75v2.25h6.5v-4.5H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPrint;
