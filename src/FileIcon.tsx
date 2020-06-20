import React, {FunctionComponent} from 'react';
import {getIconType} from './utils';
import {FILE_ICON_MAP} from './constant';
import kebabCase from 'lodash.kebabcase';
interface Props {
  type: string; // mimetype or file extension e.g.image/jpeg or jpeg
  className?: string;
  style?: any;
}

export const FileIcon: FunctionComponent<Props> = ({
  type,
  className,
  style = {},
}) => {
  const [p1, p2] = type.split('/');
  const ext = p2 ? p2 : p1;
  const fileKey = getIconType(ext);
  const fileName = kebabCase(fileKey) + '.svg';
  const fileImg = FILE_ICON_MAP[fileKey];
  return (
    <img alt={fileName} src={fileImg} className={className} style={style} />
  );
};
