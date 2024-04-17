import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 1 0 20.25 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25a9.73 9.73 0 0 1 7.583 3.62.75.75 0 1 1-1.166.944A8.23 8.23 0 0 0 12 3.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircle;
