import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDocumentCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 3A.75.75 0 0 1 5 2.25h9a.75.75 0 0 1 .53.22l5 5c.141.14.22.331.22.53v13a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75zm1.5.75v16.5h12.5V9.75H15c-.744 0-1.425-.364-1.905-.845-.48-.48-.845-1.161-.845-1.905V3.75zm8 .06V7c0 .256.136.575.405.845.27.27.589.405.845.405h3.19zm1.793 7.673a.75.75 0 0 1-.026 1.06l-4.2 4a.75.75 0 0 1-1.034 0l-1.8-1.714a.75.75 0 1 1 1.034-1.086l1.283 1.221 3.683-3.507a.75.75 0 0 1 1.06.026"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDocumentCheck;
