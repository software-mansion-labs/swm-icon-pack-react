import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScreenDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06M9.25 5a.75.75 0 0 1 .75-.75h9c.966 0 1.75.784 1.75 1.75v9a.75.75 0 0 1-1.5 0V6a.25.25 0 0 0-.25-.25h-9A.75.75 0 0 1 9.25 5M4 8.25a.75.75 0 0 1 .75.75v6c0 .138.112.25.25.25h7a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-2.5H5A1.75 1.75 0 0 1 3.25 15V9A.75.75 0 0 1 4 8.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgScreenDisabled;
