import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.47 2.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-.459.217l-4.677.445-.872.846a.75.75 0 1 1-1.044-1.076l.896-.87.892-4.246a.75.75 0 0 1 .204-.376zM5.004 18.627l3.656-.348L9.94 17l-1.47-1.47a.75.75 0 1 1 1.06-1.06L11 15.94l1.44-1.44-1.47-1.47a.75.75 0 1 1 1.06-1.06l1.47 1.47L14.94 12l-1.47-1.47a.75.75 0 1 1 1.06-1.06L16 10.94l1.44-1.44-1.47-1.47a.75.75 0 0 1 1.06-1.06l1.47 1.47L19.94 7 17 4.06 5.688 15.374z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThermometer;
