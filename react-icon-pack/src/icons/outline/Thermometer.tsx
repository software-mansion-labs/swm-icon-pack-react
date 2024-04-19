import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.9 2.259a2 2 0 0 1-.16.04c-.091.019-1.579 1.484-6.212 6.113-3.35 3.349-6.125 6.142-6.166 6.208-.046.075-.242.929-.524 2.28l-.451 2.16-.509.52c-.28.286-.532.564-.559.618-.07.136-.063.48.012.623a.756.756 0 0 0 .973.36c.077-.032.355-.269.617-.525l.476-.467 2.392-.23c1.315-.126 2.445-.251 2.511-.276.139-.054 12.271-12.159 12.367-12.339.068-.129.087-.42.039-.604-.022-.085-.644-.735-2.138-2.233-1.16-1.162-2.153-2.136-2.208-2.165-.106-.055-.392-.107-.46-.083m1.58 3.281L19.939 7l-.719.72-.719.72-.781-.776c-.429-.427-.838-.805-.908-.84-.254-.127-.673-.048-.857.162-.196.223-.253.582-.131.826.035.07.413.479.84.908l.776.781-.72.719-.72.719-.79-.785c-.435-.432-.835-.808-.89-.836-.129-.066-.512-.066-.64 0a.85.85 0 0 0-.35.342c-.076.145-.083.522-.012.66.028.055.404.455.836.89l.785.79-.719.72-.719.72-.781-.776c-.429-.427-.838-.805-.908-.84-.254-.127-.673-.048-.857.162-.196.223-.253.582-.131.826.035.07.413.479.84.908l.776.781-.72.719-.72.719-.79-.785c-.435-.432-.835-.808-.89-.836-.138-.071-.515-.064-.66.012a.85.85 0 0 0-.342.35c-.066.128-.066.511 0 .64.028.055.404.456.836.89l.785.79-.64.641-.641.64-1.819.175c-1 .096-1.822.172-1.826.169a75 75 0 0 1 .331-1.626l.338-1.619 5.649-5.65A1172 1172 0 0 1 17 4.08c.011 0 .677.657 1.48 1.46"
    />
  </svg>
);
export default SvgThermometer;