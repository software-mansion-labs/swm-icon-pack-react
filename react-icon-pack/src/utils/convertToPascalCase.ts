import camelCase from 'lodash.camelcase'
import startCase from 'lodash.startcase'

export const convertToPascalCase = (s: string) => startCase(camelCase(s)).replace(/ /g, '')
