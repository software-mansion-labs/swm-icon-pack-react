import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25H18A2.75 2.75 0 0 1 20.75 7v2a.75.75 0 0 1-1.5 0V7c0-.69-.56-1.25-1.25-1.25h-2.25V7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75H6c-.69 0-1.25.56-1.25 1.25v3.25H9a.75.75 0 0 1 0 1.5H4.75V19c0 .69.56 1.25 1.25 1.25h3a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 19V7A2.75 2.75 0 0 1 6 4.25h2.25V3A.75.75 0 0 1 9 2.25m3.47 11.22a.75.75 0 0 1 1.06 0l2.97 2.97 2.97-2.97a.75.75 0 1 1 1.06 1.06l-2.97 2.97 2.97 2.97a.75.75 0 1 1-1.06 1.06l-2.97-2.97-2.97 2.97a.75.75 0 1 1-1.06-1.06l2.97-2.97-2.97-2.97a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendarCross;
