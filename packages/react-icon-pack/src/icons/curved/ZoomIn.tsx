import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 3.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5M2.25 10a7.75 7.75 0 1 1 13.735 4.924l4.545 4.546a.75.75 0 1 1-1.06 1.06l-4.546-4.545A7.75 7.75 0 0 1 2.25 10M10 6.25a.75.75 0 0 1 .75.75v2.25H13a.75.75 0 0 1 0 1.5h-2.25V13a.75.75 0 0 1-1.5 0v-2.25H7a.75.75 0 0 1 0-1.5h2.25V7a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgZoomIn;
