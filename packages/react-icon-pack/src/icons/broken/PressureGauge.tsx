import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPressureGauge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 3.75a4.25 4.25 0 1 0 4.056 2.975.75.75 0 1 1 1.43-.45 5.751 5.751 0 0 1-4.737 7.426V17a2.25 2.25 0 0 0 4.501 0v-1.5a3.25 3.25 0 1 1 6.5 0v.854a2.751 2.751 0 1 1-1.5 0V15.5a1.75 1.75 0 0 0-3.5 0V17a3.75 3.75 0 0 1-7.5 0v-3.299a5.751 5.751 0 1 1 2.838-11.06.75.75 0 0 1-.545 1.398A4.2 4.2 0 0 0 8 3.75m0 1a.75.75 0 0 1 .75.75v2.19l1.03 1.03a.75.75 0 0 1-1.06 1.06L7.47 8.53A.75.75 0 0 1 7.25 8V5.5A.75.75 0 0 1 8 4.75m11 13a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPressureGauge;
