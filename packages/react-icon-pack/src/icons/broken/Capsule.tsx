import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCapsule = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.434 4.505a5.75 5.75 0 1 1 8.132 8.132l-7.071 7.071a5.75 5.75 0 0 1-8.132-8.132L8.97 6.97a.75.75 0 1 1 1.06 1.06l-.54.541 3.898 3.899a.75.75 0 1 1-1.06 1.06l-3.9-3.898-3.004 3.005a4.25 4.25 0 1 0 6.01 6.01l7.071-7.07a4.25 4.25 0 1 0-6.01-6.011.75.75 0 1 1-1.06-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCapsule;
