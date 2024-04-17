import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCam = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 6.5c0-.966.784-1.75 1.75-1.75h11c.966 0 1.75.784 1.75 1.75v7.992l3.5 1.4V8.108l-1.471.588a.75.75 0 0 1-.558-1.392l2.5-1A.75.75 0 0 1 21.75 7v10a.75.75 0 0 1-1.029.696l-3.971-1.588V17.5A1.75 1.75 0 0 1 15 19.25H4a1.75 1.75 0 0 1-1.75-1.75V16a.75.75 0 0 1 1.5 0v1.5c0 .138.112.25.25.25h11a.25.25 0 0 0 .25-.25v-11a.25.25 0 0 0-.25-.25H4a.25.25 0 0 0-.25.25V11a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCam;
