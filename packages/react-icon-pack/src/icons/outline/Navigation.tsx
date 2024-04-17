import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .694.464l7 17a.75.75 0 0 1-.99.975L12 17.816l-6.705 2.873a.75.75 0 0 1-.988-.975l7-17A.75.75 0 0 1 12 2.25M6.393 18.587l5.312-2.276a.75.75 0 0 1 .59 0l5.312 2.276L12 4.97z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNavigation;
