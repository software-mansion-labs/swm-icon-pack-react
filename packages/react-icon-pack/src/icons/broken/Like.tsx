import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.626 3.45a2.75 2.75 0 0 1 2.755-.878l.048.012a2.75 2.75 0 0 1 1.62 4.193L15.402 9.25h3.16a2.75 2.75 0 0 1 2.696 3.29l-1.2 6a2.75 2.75 0 0 1-2.697 2.21.75.75 0 0 1 0-1.5 1.25 1.25 0 0 0 1.226-1.005l1.2-6a1.25 1.25 0 0 0-1.226-1.495H14a.75.75 0 0 1-.624-1.166l2.426-3.639a1.25 1.25 0 0 0-.737-1.906l-.048-.012a1.25 1.25 0 0 0-1.252.4l-5.196 6.061A.75.75 0 0 1 8 10.75H4.75v8.5h2.5V14a.75.75 0 0 1 1.5 0v5.25H12a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75V10A.75.75 0 0 1 4 9.25h3.655z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLike;
