import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.828 6.75c-.331 0-.649.132-.883.366l-4 4a1.25 1.25 0 0 0 0 1.768l4 4c.234.234.552.366.883.366H19c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25zm-1.944-.695a2.75 2.75 0 0 1 1.944-.805H19A2.75 2.75 0 0 1 21.75 8v8A2.75 2.75 0 0 1 19 18.75H8.828a2.75 2.75 0 0 1-1.944-.805l-4-4a2.75 2.75 0 0 1 0-3.89zl.53.53zM9.5 11.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M7.25 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTag;
