import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCapsule = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.434 4.505a5.75 5.75 0 1 1 8.132 8.132l-7.071 7.071a5.75 5.75 0 1 1-8.132-8.132zm7.071 1.06a4.25 4.25 0 0 0-6.01 0L9.49 8.572l6.01 6.01 3.005-3.005a4.25 4.25 0 0 0 0-6.01M14.44 15.643l-6.01-6.01-3.005 3.005a4.25 4.25 0 1 0 6.01 6.01z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCapsule;
