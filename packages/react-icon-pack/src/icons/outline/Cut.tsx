import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.656 2.334a.75.75 0 0 1 1.01.322L12 11.052l4.334-8.396a.75.75 0 0 1 1.332.688l-4.822 9.344 2.02 3.912a3.25 3.25 0 1 1-.608 2.093L12 14.323l-2.256 4.37a3.25 3.25 0 1 1-.607-2.093l2.019-3.913-4.822-9.343a.75.75 0 0 1 .322-1.01M6.5 16.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m11 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCut;
