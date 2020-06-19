import {FILE_TYPE_MAP} from './constant';
import kebabCase from 'lodash.kebabcase';
export const getIconFileName = function getIconType(ext: string): string {
  let fileType = 'common';
  Object.keys(FILE_TYPE_MAP).map(function (type) {
    FILE_TYPE_MAP[type].map(function (name) {
      if (name === ext) {
        fileType = type;
      }
    });
  });
  return kebabCase(fileType) + '.svg';
};
