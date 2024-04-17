import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpeakerCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.318 2.32a.75.75 0 0 1 .432.68v18a.75.75 0 0 1-1.23.576l-3-2.5a.75.75 0 0 1 .96-1.152l1.77 1.475V4.6L7.48 8.576A.75.75 0 0 1 7 8.75H5c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 14v-4A2.75 2.75 0 0 1 5 7.25h1.728l5.792-4.826a.75.75 0 0 1 .798-.103m2.152 6.15a.75.75 0 0 1 1.06 0L19 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L20.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06L19 13.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L17.94 12l-2.47-2.47a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSpeakerCross;
