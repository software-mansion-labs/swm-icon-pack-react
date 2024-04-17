import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.25 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V4.75H15a.75.75 0 0 1-.75-.75m-11 0A.75.75 0 0 1 4 3.25h5a.75.75 0 0 1 0 1.5H4.75V9a.75.75 0 1 1-1.5 0zM4 14.25a.75.75 0 0 1 .75.75v4.25H9a.75.75 0 1 1 0 1.5H4a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h4.25V15a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFullscreen;
