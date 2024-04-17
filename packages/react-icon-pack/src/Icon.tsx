import React, { SVGProps } from 'react';
import * as BrokenIcons from './icons/broken';
import * as OutlineIcons from './icons/outline';
import * as CurvedIcons from './icons/curved';

const iconVariants = {
  'broken': BrokenIcons,
  'outline': OutlineIcons,
  'curved': CurvedIcons
}

interface Props extends SVGProps<SVGSVGElement> {
  name: keyof (typeof BrokenIcons | typeof OutlineIcons | typeof CurvedIcons),
  variant?: keyof typeof iconVariants,
  color?: string,
  size?: number,
}

export default function Icon({ name, variant = 'broken', color, size = 50, ...props }: Props) {
  return React.createElement(iconVariants[variant][name], {
    width: size,
    height: size,
    color,
    ...props
  })
}
