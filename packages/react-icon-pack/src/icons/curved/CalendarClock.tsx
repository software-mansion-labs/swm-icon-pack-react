import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 1.75a.75.75 0 0 1 .75.75v.847A24 24 0 0 1 12 3.25q1.205-.002 2.25.097V2.5a.75.75 0 0 1 1.5 0v1.069c.998.208 1.858.53 2.584 1 1.566 1.015 2.374 2.623 2.712 4.817a.75.75 0 1 1-1.482.228c-.3-1.942-.961-3.084-2.045-3.785-.477-.309-1.058-.548-1.769-.723V6.5a.75.75 0 0 1-1.5 0V4.855A22 22 0 0 0 12 4.75c-.84 0-1.586.034-2.25.105V6.5a.75.75 0 0 1-1.5 0V5.107c-.958.234-1.68.588-2.227 1.067-.98.859-1.54 2.252-1.713 4.576H9a.75.75 0 0 1 0 1.5H4.251l-.001.25c0 2.421.286 4.08.9 5.217.586 1.085 1.515 1.775 3.034 2.16a.75.75 0 0 1-.368 1.454c-1.84-.467-3.161-1.375-3.986-2.901-.796-1.474-1.08-3.442-1.08-5.93q0-.53.018-1.027c.106-2.91.7-5.055 2.267-6.427.842-.738 1.912-1.205 3.215-1.477V2.5A.75.75 0 0 1 9 1.75m7 11.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M10.75 17a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M16 14.45a.75.75 0 0 1 .75.75v1.402l.71.8a.75.75 0 0 1-1.12.996l-.9-1.012a.75.75 0 0 1-.19-.498V15.2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendarClock;
