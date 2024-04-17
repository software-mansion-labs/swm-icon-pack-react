import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.47 4.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06m15.06 0a.75.75 0 0 1 0 1.06L13.06 12l6.47 6.47a.75.75 0 0 1-1.06 1.06L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06l6.997-6.998.003-.002.002-.003L18.47 4.47a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCross;
