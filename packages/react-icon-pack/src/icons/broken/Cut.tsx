import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.656 2.334a.75.75 0 0 1 1.01.322L12 11.052l4.334-8.396a.75.75 0 0 1 1.332.688l-4.822 9.344 2.823 5.468a.75.75 0 0 1 .083.344 1.75 1.75 0 1 0 1.75-1.75.75.75 0 0 1 0-1.5 3.25 3.25 0 1 1-3.244 3.443L12 14.323l-2.256 4.37A3.25 3.25 0 1 1 6.5 15.25a.75.75 0 0 1 0 1.5 1.75 1.75 0 1 0 1.75 1.75.75.75 0 0 1 .084-.344l2.822-5.468-4.822-9.344a.75.75 0 0 1 .322-1.01"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCut;
