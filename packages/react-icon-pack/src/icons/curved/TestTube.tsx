import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTestTube = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.309 2.47a.75.75 0 0 1 0 1.06.75.75 0 0 0 0 1.061l6.454 6.455.02.02 2.01 2.01a4.75 4.75 0 1 1-6.717 6.718L7.524 14.24l-.004-.003-.004-.005-2.925-2.924a.75.75 0 0 0-1.06 0 .75.75 0 1 1-1.061-1.061 2.25 2.25 0 0 1 3.182 0l2.458 2.458c.775-.483 1.593-.519 2.283-.523l.233-.001c.791-.002 1.398-.003 2.014-.34a6.5 6.5 0 0 1 2.755-.812q.11-.008.217-.014l-5.364-5.364a2.25 2.25 0 0 1 0-3.182.75.75 0 0 1 1.06 0m5.701 9.944a5 5 0 0 1-.556.063c-.14.01-.283.015-.42.02l-.057.003c-.158.007-.311.014-.469.026a5 5 0 0 0-2.148.632c-.972.53-1.963.527-2.716.525h-.242c-.473.003-.848.027-1.174.14l4.909 4.91a3.25 3.25 0 0 0 4.596-4.596z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTestTube;
