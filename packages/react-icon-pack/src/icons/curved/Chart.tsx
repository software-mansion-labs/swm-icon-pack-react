import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.784 11.25h7.466V3.784a8.25 8.25 0 0 0-7.466 7.466m8.966-7.466v7.905l5.59 5.59a8.25 8.25 0 0 0-5.59-13.496m4.53 14.556-5.59-5.59H3.783a8.25 8.25 0 0 0 13.495 5.59M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a9.72 9.72 0 0 1-2.856 6.894A9.72 9.72 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChart;
