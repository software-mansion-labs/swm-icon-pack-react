import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHourglass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 4A.75.75 0 0 1 5 3.25h14a.75.75 0 0 1 0 1.5h-1.25v2.144a2.75 2.75 0 0 1-.462 1.526l-1.924 2.887c-.28.42-.28.966 0 1.386l1.924 2.887c.301.452.462.983.462 1.526a.75.75 0 0 1-1.5 0 1.25 1.25 0 0 0-.21-.694l-1.924-2.887a2.75 2.75 0 0 1 0-3.05l1.924-2.887a1.25 1.25 0 0 0 .21-.694V4.75H5A.75.75 0 0 1 4.25 4M7 6.144a.75.75 0 0 1 .75.75c0 .247.073.488.21.694l1.924 2.887a2.75 2.75 0 0 1 0 3.05L7.96 16.412a1.25 1.25 0 0 0-.21.694v2.144H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h1.25v-2.145c0-.542.16-1.073.462-1.525l1.924-2.887c.28-.42.28-.966 0-1.386L6.712 8.42a2.75 2.75 0 0 1-.462-1.526.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHourglass;
