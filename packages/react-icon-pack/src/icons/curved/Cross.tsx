import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.9 4.259a1 1 0 0 1-.147.037c-.138.031-.339.201-.419.355-.069.134-.089.424-.041.609.023.086.963 1.052 3.339 3.43L10.939 12l-3.307 3.31c-2.376 2.378-3.316 3.344-3.339 3.43-.136.526.167.98.663.993a1.4 1.4 0 0 0 .304-.026c.086-.023 1.052-.963 3.43-3.339L12 13.061l3.31 3.307c2.378 2.376 3.344 3.316 3.43 3.339.525.136.98-.167.993-.662a1.4 1.4 0 0 0-.026-.305c-.023-.086-.963-1.052-3.339-3.43L13.061 12l3.307-3.31c2.376-2.378 3.316-3.344 3.339-3.43.136-.525-.167-.98-.662-.993a1.4 1.4 0 0 0-.305.026c-.086.023-1.052.963-3.43 3.339L12 10.94 8.71 7.654C6.9 5.847 5.384 4.351 5.34 4.329c-.092-.045-.38-.091-.44-.07"
    />
  </svg>
);
export default SvgCross;
