import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 5.75A4.25 4.25 0 0 0 7.75 10v.309a4.74 4.74 0 0 1 2.392 1.129.75.75 0 1 1-.992 1.124A3.25 3.25 0 1 0 7 18.25a.75.75 0 0 1 0 1.5 4.75 4.75 0 0 1-.75-9.441V10a5.75 5.75 0 1 1 11.5 0v.309A4.751 4.751 0 0 1 17 19.75a.75.75 0 0 1 0-1.5 3.25 3.25 0 0 0 0-6.5.75.75 0 0 1-.75-.75v-1A4.25 4.25 0 0 0 12 5.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloud;
