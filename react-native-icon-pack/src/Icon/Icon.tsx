import type { IconProps } from '../../../types';
import outlineGlyphmap from '../../../fonts/outline/glyphmap.json'
import brokenGlyphamp from '../../../fonts/broken/glyphmap.json'
import curvedGlyphmap from '../../../fonts/curved/glyphmap.json'
import { createIcon } from '../helpers';
import type { FC } from 'react';

const iconMap = {
  outline: {
    glyphmap: outlineGlyphmap,
    fontFamily: 'swm-icons-outline',
    fontFile: 'swm-icons-outline.ttf',
  },
  curved: {
    glyphmap: curvedGlyphmap,
    fontFamily: 'swm-icons-curved',
    fontFile: 'swm-icons-curved.ttf',
  },
  broken: {
    glyphmap: brokenGlyphamp,
    fontFamily: 'swm-icons-broken',
    fontFile: 'swm-icons-broken.ttf',
  }
};

export const Icon: FC<IconProps> = ({ type = 'outline', size = 24, color = 'black', ...props }) => {
  const iconConfig = iconMap[type];

  const FontIcon = createIcon(iconConfig.glyphmap, iconConfig.fontFamily, iconConfig.fontFile);
  return <FontIcon type={type} color={color} size={size} {...props} />;
};

