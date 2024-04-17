import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCam = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 6.5c0-.966.784-1.75 1.75-1.75h11c.966 0 1.75.784 1.75 1.75v1.392l3.971-1.588A.75.75 0 0 1 21.75 7v10a.75.75 0 0 1-1.029.696l-3.971-1.588V17.5A1.75 1.75 0 0 1 15 19.25H4a1.75 1.75 0 0 1-1.75-1.75zm13 8.483V17.5a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25v-11A.25.25 0 0 1 4 6.25h11a.25.25 0 0 1 .25.25v8.483m1.5-.49 3.5 1.4V8.107l-3.5 1.4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCam;
