import { camelCase, startCase } from 'lodash';

export const convertToPascalCase = (s: string) => startCase(camelCase(s)).replace(/ /g, '');
