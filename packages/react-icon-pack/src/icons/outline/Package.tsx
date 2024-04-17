import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.25 5c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v3c0 .698-.409 1.3-1 1.582V20a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V9.582A1.75 1.75 0 0 1 3.25 8zm2.5 4.75v9.5h12.5v-9.5zm-.75-5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25zM9.25 13a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPackage;
