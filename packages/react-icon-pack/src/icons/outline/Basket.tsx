import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.53 3.47a.75.75 0 0 1 0 1.06L4.81 9.25h14.38l-4.72-4.72a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 .205.677l-2 10a.75.75 0 0 1-.735.603H5a.75.75 0 0 1-.735-.603l-2-10a.75.75 0 0 1 .205-.677l6-6a.75.75 0 0 1 1.06 0m10.555 7.28H3.915l1.7 8.5h12.77z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBasket;
