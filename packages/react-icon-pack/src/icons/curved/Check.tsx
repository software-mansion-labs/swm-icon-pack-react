import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.9 6.259a2 2 0 0 1-.16.04c-.091.019-1.397 1.302-5.43 5.333L9 16.939l-2.31-2.307c-1.644-1.642-2.345-2.316-2.43-2.338-.546-.143-.993.175-.993.706 0 .124.028.272.064.34.035.066 1.239 1.293 2.676 2.728 1.882 1.877 2.647 2.616 2.733 2.638a1.2 1.2 0 0 0 .52 0c.088-.022 1.632-1.541 5.733-5.638 3.087-3.085 5.641-5.662 5.676-5.728.077-.145.085-.521.013-.66a.85.85 0 0 0-.322-.339c-.106-.055-.393-.106-.46-.082"
    />
  </svg>
);
export default SvgCheck;
