import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExplore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5c.966 0 1.89-.166 2.75-.47a.75.75 0 1 1 .5 1.415 9.7 9.7 0 0 1-3.25.555c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75a9.7 9.7 0 0 1-1.625 5.392.75.75 0 1 1-1.25-.83A8.25 8.25 0 0 0 12 3.75m4.066 4.184a.75.75 0 0 1 .197.712l-1.414 5.657a.75.75 0 0 1-.546.546l-5.657 1.414a.75.75 0 0 1-.91-.91l1.415-5.656a.75.75 0 0 1 1.455.364l-1.11 4.444 4.007-1.002 1.002-4.008-.323.081a.75.75 0 0 1-.364-1.455l1.536-.384a.75.75 0 0 1 .712.197"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExplore;
