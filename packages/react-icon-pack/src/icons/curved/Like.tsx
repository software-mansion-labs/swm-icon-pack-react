import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.626 3.45a2.75 2.75 0 0 1 2.755-.878l.048.012a2.75 2.75 0 0 1 1.62 4.193L15.402 9.25h3.16a2.75 2.75 0 0 1 2.696 3.29l-1.2 6a2.75 2.75 0 0 1-2.697 2.21H4a.75.75 0 0 1-.75-.75V10A.75.75 0 0 1 4 9.25h3.655zm-5.376 7.3h-2.5v8.5h2.5zm1.5 8.5h8.61a1.25 1.25 0 0 0 1.226-1.005l1.2-6a1.25 1.25 0 0 0-1.226-1.495H14a.75.75 0 0 1-.624-1.166l2.426-3.639a1.25 1.25 0 0 0-.737-1.906l-.048-.012a1.25 1.25 0 0 0-1.252.4l-5.015 5.85z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLike;
