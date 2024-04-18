import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.805 2.279c-.291.071-.506.328-.545.653-.014.114-.019 1.126-.013 2.248.014 2.166.009 2.114.208 2.334.136.149.308.219.545.219.231 0 .357-.046.514-.188.202-.183.223-.277.239-1.052l.015-.728 1.226-.012c1.291-.014 1.308-.016 1.52-.208.15-.136.219-.308.219-.545s-.069-.409-.219-.545c-.212-.192-.229-.194-1.52-.208l-1.226-.012-.015-.728c-.015-.754-.029-.823-.208-1.021-.167-.185-.476-.271-.74-.207m6 0c-.291.071-.506.328-.545.653-.014.114-.019 1.126-.013 2.248.014 2.166.009 2.114.208 2.334.136.149.308.219.545.219.231 0 .357-.046.514-.188.202-.183.223-.277.239-1.055l.015-.73h1.234c1.143 0 1.251.006 1.452.081.29.109.596.415.705.705.08.215.081.285.081 6.454s-.001 6.239-.081 6.454c-.109.29-.415.596-.705.705-.215.08-.285.081-6.454.081s-6.239-.001-6.454-.081a1.34 1.34 0 0 1-.705-.705c-.079-.212-.081-.297-.081-3.955v-3.738l5.23-.01c5.6-.012 5.297 0 5.524-.206.15-.136.219-.308.219-.545s-.069-.409-.219-.545c-.227-.206.076-.194-5.524-.206l-5.23-.01V8.501c0-2.001.001-2.006.351-2.362.233-.237.452-.337.841-.385.41-.051.586-.156.73-.434.066-.129.066-.511 0-.64-.162-.313-.364-.418-.792-.41-1.19.02-2.237.859-2.56 2.05-.065.243-.07.677-.07 6.68s.005 6.437.07 6.68a2.84 2.84 0 0 0 1.99 1.99c.243.065.677.07 6.68.07s6.437-.005 6.68-.07a2.84 2.84 0 0 0 1.99-1.99c.065-.243.07-.677.07-6.68s-.005-6.437-.07-6.68a2.84 2.84 0 0 0-1.45-1.781c-.516-.254-.62-.268-2.106-.289l-1.347-.019-.014-.725c-.015-.753-.029-.822-.208-1.02-.167-.185-.476-.271-.74-.207"
    />
  </svg>
);
export default SvgCalendar;
