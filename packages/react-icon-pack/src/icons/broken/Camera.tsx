import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.5 5.75a.25.25 0 0 0-.25.25A1.75 1.75 0 0 1 7.5 7.75H5c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5A2.75 2.75 0 0 1 2.25 17V9A2.75 2.75 0 0 1 5 6.25h2.5A.25.25 0 0 0 7.75 6c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75 0 .138.112.25.25.25H19A2.75 2.75 0 0 1 21.75 9a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25h-2.5A1.75 1.75 0 0 1 14.75 6a.25.25 0 0 0-.25-.25zM11.25 10a.75.75 0 0 1 .75-.75A3.75 3.75 0 1 1 8.25 13a.75.75 0 0 1 1.5 0A2.25 2.25 0 1 0 12 10.75a.75.75 0 0 1-.75-.75M21 12.25a.75.75 0 0 1 .75.75v4A2.75 2.75 0 0 1 19 19.75H9a.75.75 0 0 1 0-1.5h10c.69 0 1.25-.56 1.25-1.25v-4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCamera;
