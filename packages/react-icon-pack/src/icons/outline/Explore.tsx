import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExplore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.816-4.066a.75.75 0 0 1 .197.712l-1.414 5.657a.75.75 0 0 1-.546.546l-5.657 1.414a.75.75 0 0 1-.91-.91l1.415-5.656a.75.75 0 0 1 .546-.546l5.657-1.414a.75.75 0 0 1 .712.197m-5.569 2.563-1.002 4.008 4.008-1.002 1.002-4.008z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExplore;
