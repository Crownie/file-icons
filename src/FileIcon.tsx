import React, {FunctionComponent} from 'react';
import {getIconFileName} from './utils';

interface Props {
  type: string; // mimetype or file extension e.g.image/jpeg or jpeg
  className?: string;
  style?: any;
}

export const FileIcon: FunctionComponent<Props> = ({
  type = '',
  className,
  style = {},
}) => {
  const [p1, p2] = type.split('/');
  const ext = p2 ? p2 : p1;
  const fileName = getIconFileName(ext);
  const imgSrc = require('./img/' + fileName);
  return (
    <img alt={fileName} src={imgSrc} className={className} style={style} />
  );
};
