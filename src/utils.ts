import {FILE_TYPE_MAP} from './constant';

export const getIconType = (extname: string): string => {
  let fileType = 'common';
  Object.entries(FILE_TYPE_MAP).map(([key, val]) => {
    val.map(function (name) {
      if (name === extname) {
        fileType = key;
      }
    });
  });
  return fileType;
};

export const isMimeType = (type: string): boolean => {
  const arr = type.split('/');
  return arr.length === 2;
};
