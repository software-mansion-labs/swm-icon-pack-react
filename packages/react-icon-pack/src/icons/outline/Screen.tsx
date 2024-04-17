import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.25 6c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v9A1.75 1.75 0 0 1 19 16.75h-6.25v2.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-2.5H5A1.75 1.75 0 0 1 3.25 15zM5 5.75a.25.25 0 0 0-.25.25v9c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgScreen;
