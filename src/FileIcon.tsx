import React, {FunctionComponent} from 'react';
import {getIconType, isMimeType} from './utils';
import {FILE_ICON_MAP} from './constant';
import kebabCase from 'lodash.kebabcase';
import mimeTypes from 'mime-types';

interface Props {
  type: string; // mimetype or file extension e.g.image/jpeg or jpeg
  className?: string;
  style?: any;
}

export const FileIcon: FunctionComponent<Props> = React.memo(
  ({type, className, style = {}}) => {
    const ext = isMimeType(type) ? mimeTypes.extension(type) : type;
    let fileKey = getIconType(ext);
    const fileName = kebabCase(fileKey) + '.svg';
    const fileImg = FILE_ICON_MAP[fileKey];
    return (
      <img
        alt={fileName}
        src={fileImg.default}
        className={className}
        style={style}
      />
    );
  },
);
