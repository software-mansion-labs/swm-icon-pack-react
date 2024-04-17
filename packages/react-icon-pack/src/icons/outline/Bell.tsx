import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.25 9c0-3.682 3.068-6.75 6.75-6.75S18.75 5.318 18.75 9c0 1.378.468 3.284.967 4.904a43 43 0 0 0 .959 2.765l.016.04.003.01.001.002A.75.75 0 0 1 20 17.75h-4.25V18a3.751 3.751 0 0 1-7.5 0v-.25H4a.75.75 0 0 1-.67-1.085v-.001l.003-.007.014-.03.06-.124c.05-.11.126-.275.216-.486.181-.422.423-1.027.665-1.754.488-1.463.962-3.376.962-5.263m-.098 7.25h13.766a44 44 0 0 1-.635-1.904c-.501-1.63-1.033-3.724-1.033-5.346 0-2.854-2.396-5.25-5.25-5.25S6.75 6.146 6.75 9c0 2.113-.526 4.2-1.038 5.737a25 25 0 0 1-.56 1.513m9.098 1.5h-4.5V18a2.25 2.25 0 1 0 4.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBell;
