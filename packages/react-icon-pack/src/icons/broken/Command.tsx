import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 3.75a2.25 2.25 0 0 0 0 4.5h8.25V6A3.75 3.75 0 1 1 18 9.75a.75.75 0 0 1 0-1.5A2.25 2.25 0 1 0 15.75 6v8.25H18A3.75 3.75 0 1 1 14.25 18V9.75h-4.5v4.5H12a.75.75 0 0 1 0 1.5H9.75V18A3.75 3.75 0 1 1 6 14.25h2.25v-4.5H6A3.75 3.75 0 1 1 9.75 6a.75.75 0 0 1-1.5 0A2.25 2.25 0 0 0 6 3.75m2.25 12H6A2.25 2.25 0 1 0 8.25 18zm7.5 0V18A2.25 2.25 0 1 0 18 15.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCommand;
