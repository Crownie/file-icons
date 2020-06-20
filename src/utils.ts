import {FILE_TYPE_MAP} from './constant';

export var getIconType = function getIconType(extname) {
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
