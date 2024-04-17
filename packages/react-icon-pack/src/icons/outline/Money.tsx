import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMoney = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 7.2c0-1.022.78-1.95 1.861-1.95H20.89c1.081 0 1.861.928 1.861 1.95v9.6c0 1.022-.78 1.95-1.861 1.95H3.11c-1.081 0-1.861-.928-1.861-1.95zm1.861-.45c-.146 0-.361.146-.361.45v9.6c0 .304.215.45.361.45H20.89c.146 0 .361-.146.361-.45V7.2c0-.304-.215-.45-.361-.45zM6 8.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5A.75.75 0 0 1 6 8.75m6 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M18 8.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoney;
