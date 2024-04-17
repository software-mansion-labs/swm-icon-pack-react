import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlusSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 6.25a.75.75 0 0 1 .75.75v4.25H17a.75.75 0 0 1 0 1.5h-4.25V17a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M6.25 12a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlusSmall;
