import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V4.75H4.75v10.5H7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75zM20 9.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-7.69l-4.78 4.78A.75.75 0 0 1 6.25 21v-2.5a.75.75 0 0 1 1.5 0v.69l3.72-3.72a.75.75 0 0 1 .53-.22h7.25V10a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessageSquare;
