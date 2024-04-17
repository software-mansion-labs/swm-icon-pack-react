import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.75 7.333c0-1.63 1.212-3.083 2.861-3.083H12a.75.75 0 0 1 0 1.5H4.611c-.683 0-1.361.636-1.361 1.583v9.334c0 .946.678 1.583 1.361 1.583H8a.75.75 0 0 1 0 1.5H4.611c-1.649 0-2.861-1.453-2.861-3.083zM16.25 5a.75.75 0 0 1 .75-.75h2.389c1.649 0 2.861 1.453 2.861 3.083v9.334c0 1.63-1.212 3.083-2.861 3.083H12a.75.75 0 0 1 0-1.5h7.389c.683 0 1.361-.637 1.361-1.583v-.917H14a3.75 3.75 0 1 1 0-7.5h6.75v-.917c0-.947-.678-1.583-1.361-1.583H17a.75.75 0 0 1-.75-.75m4.5 4.75H14a2.25 2.25 0 0 0 0 4.5h6.75zM14 11.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWallet;
