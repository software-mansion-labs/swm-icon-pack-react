import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.53 3.47a.75.75 0 0 1 0 1.06L4.81 9.25h14.38l-4.72-4.72a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 .205.677l-1.356 6.784a4.75 4.75 0 0 1-4.658 3.819H8.279a4.75 4.75 0 0 1-4.658-3.818l-1.356-6.785a.75.75 0 0 1 .205-.677l6-6a.75.75 0 0 1 1.06 0m10.555 7.28H3.915l1.177 5.887A3.25 3.25 0 0 0 8.28 19.25h7.442a3.25 3.25 0 0 0 3.187-2.613z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBasket;
