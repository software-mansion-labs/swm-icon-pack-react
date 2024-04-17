import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.75 7.333c0-1.63 1.212-3.083 2.861-3.083H19.39c1.649 0 2.861 1.453 2.861 3.083v9.334c0 1.63-1.212 3.083-2.861 3.083H4.61c-1.649 0-2.861-1.453-2.861-3.083zm19 6.917v-4.5H14a2.25 2.25 0 0 0 0 4.5zm0-6H14a3.75 3.75 0 1 0 0 7.5h6.75v.917c0 .946-.678 1.583-1.361 1.583H4.61c-.683 0-1.361-.637-1.361-1.583V7.333c0-.947.678-1.583 1.361-1.583H19.39c.683 0 1.361.636 1.361 1.583zm-6.75 3a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWallet;
