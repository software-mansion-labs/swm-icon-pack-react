import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 4.25a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m0 13.99a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWarning;
