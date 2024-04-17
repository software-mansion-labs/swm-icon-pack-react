import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMoney = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 7c0-.966.784-1.75 1.75-1.75h10a.75.75 0 0 1 0 1.5H3a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25h3a.75.75 0 0 1 0 1.5H3A1.75 1.75 0 0 1 1.25 17zm16-1a.75.75 0 0 1 .75-.75h3c.966 0 1.75.784 1.75 1.75v10A1.75 1.75 0 0 1 21 18.75H10a.75.75 0 0 1 0-1.5h11a.25.25 0 0 0 .25-.25V7a.25.25 0 0 0-.25-.25h-3a.75.75 0 0 1-.75-.75M6 8.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5A.75.75 0 0 1 6 8.75m6 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M18 8.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoney;
