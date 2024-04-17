import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 3.75A6.25 6.25 0 0 0 3.75 10a.75.75 0 0 1-1.5 0 7.75 7.75 0 1 1 13.735 4.924l4.545 4.546a.75.75 0 0 1-1.06 1.06l-4.546-4.545A7.72 7.72 0 0 1 10 17.75a7.73 7.73 0 0 1-5.424-2.214.75.75 0 0 1 1.05-1.072A6.23 6.23 0 0 0 10 16.25a6.23 6.23 0 0 0 4.42-1.83A6.25 6.25 0 0 0 10 3.75M6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgZoomOut;
