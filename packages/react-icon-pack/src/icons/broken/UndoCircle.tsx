import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUndoCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M7 9.25a.75.75 0 0 1 .75.75v1.162c1.011-.852 2.175-1.655 3.648-1.856a6.1 6.1 0 0 1 3.714.666 5.9 5.9 0 0 1 2.569 2.714.75.75 0 0 1-1.362.628 4.4 4.4 0 0 0-1.916-2.02 4.6 4.6 0 0 0-2.802-.501c-1.067.145-1.91.706-2.807 1.457H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 7 9.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUndoCircle;
