import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDocumentCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 3A.75.75 0 0 1 5 2.25h9a.75.75 0 0 1 .53.22l5 5c.141.14.22.331.22.53v4a.75.75 0 0 1-1.5 0V9.75H15c-.744 0-1.425-.364-1.905-.845-.48-.48-.845-1.161-.845-1.905V3.75h-6.5V5a.75.75 0 0 1-1.5 0zm9.5.81V7c0 .256.136.575.405.845.27.27.589.405.845.405h3.19zM5 9.25a.75.75 0 0 1 .75.75v10.25h12.5V16a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V10A.75.75 0 0 1 5 9.25m3.97 1.72a.75.75 0 0 1 1.06 0L12 12.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 14l1.97 1.97a.75.75 0 1 1-1.06 1.06L12 15.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06L10.94 14l-1.97-1.97a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDocumentCross;
