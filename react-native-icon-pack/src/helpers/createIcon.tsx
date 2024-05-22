// https://github.com/oblador/react-native-vector-icons/blob/master/lib/create-icon-set.js

import { PureComponent } from 'react'
import { Platform, Text, type TextStyle } from 'react-native'
import type { IconProps } from '../../../types'

export type GlyphMap = Record<string, number>

export const createIcon = (glyphMap: GlyphMap, fontFamily: string, fontFile: string) => {
  // Android doesn't care about actual fontFamily name, it will only look in fonts folder.
  const fontBasename = fontFile ? fontFile.replace(/\.(otf|ttf)$/, '') : fontFamily

  const fontReference = Platform.select({
    windows: `/Assets/${fontFile}#${fontFamily}`,
    android: fontBasename,
    web: fontBasename,
    default: fontFamily,
  })

  class Icon extends PureComponent<IconProps> {
    static defaultProps = {
      size: 24,
      color: '#000',
      allowFontScaling: false,
    }

    render() {
      const { name, size, color, ...props } = this.props

      const glyphValue = glyphMap[name]
      const glyph = glyphValue ? String.fromCharCode(glyphValue) : ''

      const styleDefaults: TextStyle = {
        color,
        fontSize: size,
        fontFamily: fontReference,
        fontWeight: 'normal',
        fontStyle: 'normal',
      }

      return (
        <Text selectable={false} {...props} style={styleDefaults}>
          {glyph}
        </Text>
      )
    }
  }

  return Icon
}
