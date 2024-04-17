import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.47 3.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06m-1.44 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m-3.56 8.5a.75.75 0 0 1 1.06 0L12 18.94l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVertical;
