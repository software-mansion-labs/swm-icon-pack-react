import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.25 3.784a8.25 8.25 0 1 0 6.03 14.556l-5.59-5.59H7a.75.75 0 0 1 0-1.5h4.25zm1.5 0a8.23 8.23 0 0 1 5.4 2.716.75.75 0 1 0 1.117-1A9.73 9.73 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.72 9.72 0 0 0 6.894-2.856A9.72 9.72 0 0 0 21.75 12a.75.75 0 0 0-1.5 0 8.2 8.2 0 0 1-1.91 5.28l-5.59-5.59z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChart;
