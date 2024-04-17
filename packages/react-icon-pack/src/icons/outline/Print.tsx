import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.25 4c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v4.25H20a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-3.25V21a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75v-2.25H4a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 4 8.25h3.25zm1.5 4.25h6.5V4a.25.25 0 0 0-.25-.25H9a.25.25 0 0 0-.25.25zm-1.5 9V15a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v2.25h2.5v-7.5H4.75v7.5zm1.5-1.5v4.5h6.5v-4.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPrint;
