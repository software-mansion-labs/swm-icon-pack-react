import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.801 2.286a.76.76 0 0 0-.448.345l-.093.149v16.44l.093.149a1 1 0 0 0 .211.234c.065.046 1.491.543 3.167 1.104 2.235.747 3.102 1.02 3.249 1.024.162.003.753-.18 3.11-.967l2.91-.971 2.91.971c3.085 1.03 3.156 1.048 3.436.903.152-.079.324-.276.364-.42.017-.059.03-3.788.03-8.287V4.78l-.093-.149a1 1 0 0 0-.211-.234c-.065-.046-1.491-.543-3.167-1.104-2.235-.747-3.102-1.02-3.249-1.024-.162-.003-.753.18-3.11.967L9 4.207l-2.89-.962c-1.589-.529-2.953-.97-3.03-.981a.8.8 0 0 0-.279.022m5.439 10.46v7.207L6 19.207l-2.24-.747V4.047L6 4.793l2.24.747zm6-1.496v7.21l-2.24.747-2.24.746V5.539l2.23-.746 2.24-.75c.006-.002.01 3.242.01 7.207m6 1.496v7.207L18 19.207l-2.24-.747V4.047l2.24.746 2.24.747z"
    />
  </svg>
);
export default SvgMap;