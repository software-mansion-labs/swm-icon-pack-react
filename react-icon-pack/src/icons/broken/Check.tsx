import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.9 6.259a2 2 0 0 1-.16.04c-.091.019-1.177 1.081-4.473 4.373-2.461 2.459-4.386 4.412-4.43 4.496-.14.27-.07.685.149.877a.78.78 0 0 0 .846.118c.228-.119 8.836-8.754 8.875-8.903.13-.503-.128-.926-.607-.993a.7.7 0 0 0-.2-.008m-16 6a1 1 0 0 1-.147.037c-.138.031-.339.201-.419.355-.069.134-.089.424-.041.609.023.086.778.868 2.639 2.733 1.435 1.437 2.662 2.641 2.728 2.676.154.082.524.083.68.001a.85.85 0 0 0 .339-.345c.058-.112.072-.414.028-.585-.023-.086-.778-.868-2.639-2.733-1.435-1.437-2.653-2.636-2.708-2.665-.106-.055-.392-.107-.46-.083"
    />
  </svg>
);
export default SvgCheck;