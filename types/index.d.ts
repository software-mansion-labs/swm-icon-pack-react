import type { FC } from 'react'
import glyphmap from '../fonts/outline/glyphmap.json'

declare type IconType = 'outline' | 'curved' | 'broken'
declare type IconName = keyof typeof glyphmap

declare interface IconProps {
  name: IconName
  /**
   * Default: 'outline'
   */
  type?: IconType
  /**
   * Default: 24
   */
  size?: number
  /**
   * Default: '000'
   */
  color?: string
}

declare type IconComponent = FC<IconProps>

export const Icon: IconComponent
export type { IconName, IconProps, IconType, IconComponent }
