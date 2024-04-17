import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTestTube = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.309 2.47a.75.75 0 0 1 0 1.06l-.53.53 1.408 1.41a.75.75 0 1 1-1.06 1.06l-1.94-1.939a.75.75 0 0 1 0-1.06l1.06-1.061a.75.75 0 0 1 1.062 0m2.818 6a.75.75 0 0 1 1.06 0l4.607 4.606a4.75 4.75 0 1 1-6.718 6.718l-9.015-9.016-.53.53a.75.75 0 1 1-1.061-1.06l1.06-1.06a.75.75 0 0 1 1.061 0l9.546 9.545a3.25 3.25 0 0 0 4.596-4.596l-1.827-1.827-5.737 1.323a.75.75 0 0 1-.338-1.461l4.824-1.113-1.528-1.529a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTestTube;
