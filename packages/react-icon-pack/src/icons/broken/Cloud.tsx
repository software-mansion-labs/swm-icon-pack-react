import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.25 5a.75.75 0 0 1 .75-.75A5.75 5.75 0 0 1 17.75 10v1a.75.75 0 0 1-1.5 0v-1A4.25 4.25 0 0 0 12 5.75a.75.75 0 0 1-.75-.75m-2.8 1.4a.75.75 0 0 1 .15 1.05A4.23 4.23 0 0 0 7.75 10v.309a4.74 4.74 0 0 1 2.392 1.129.75.75 0 1 1-.992 1.124A3.25 3.25 0 1 0 7 18.25a.75.75 0 0 1 0 1.5 4.75 4.75 0 0 1-.75-9.441V10c0-1.294.428-2.49 1.15-3.45a.75.75 0 0 1 1.05-.15m10.634 5.104a.75.75 0 0 1 1.058-.066A4.75 4.75 0 0 1 17 19.75a.75.75 0 0 1 0-1.5 3.25 3.25 0 0 0 2.15-5.688.75.75 0 0 1-.066-1.058"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloud;
