import React from 'react';
import * as BrokenIcons from '../dist/icons/broken';
import * as OutlineIcons from '../dist/icons/outline';
import * as CurvedIcons from '../dist/icons/curved';
import { convertToPascalCase } from './utils';
import { type IconProps } from '../../types';

const iconVariants = {
  broken: BrokenIcons,
  outline: OutlineIcons,
  curved: CurvedIcons,
};

type IconComponentName = keyof (typeof BrokenIcons | typeof OutlineIcons | typeof CurvedIcons);

export function Icon({ name, type = 'outline', color, size = 24 }: IconProps) {
  const iconName = convertToPascalCase(name) as IconComponentName;

  return React.createElement(iconVariants[type][iconName], {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    color,
  });
}
