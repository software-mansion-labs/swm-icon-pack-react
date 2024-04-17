import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.53 2.47a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0m10.94 0a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06M12 5.75a7.25 7.25 0 1 0 5.438 12.045.75.75 0 0 1 1.124.993A8.75 8.75 0 1 1 20.75 13a.75.75 0 0 1-1.5 0A7.25 7.25 0 0 0 12 5.75m0 2.5a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1-.22-.53V9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlarm;
