import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import {FileIcon} from '../src';

const testTypes = (type, fileName) => {
  let res = render(<FileIcon type={type} />);
  let container = res.container;
  let img = container.getElementsByTagName('img');
  expect(img).toBeDefined();
  expect(img[0].getAttribute('alt')).toEqual(fileName);
};

it('renders correctly', () => {
  let res = render(
    <FileIcon
      type={'pdf'}
      className={'dummy-class'}
      style={{width: 20, height: 20}}
    />,
  );
  let container = res.container;
  expect(container.innerHTML).toMatchSnapshot();
});

it('test file types', () => {
  testTypes('jpeg', 'img.svg');
  testTypes('image/jpeg', 'img.svg');
  testTypes('image/png', 'img.svg');
  testTypes('mp3', 'music.svg');
  testTypes('audio/mp3', 'music.svg');
  testTypes('audio/wav', 'music.svg');
  testTypes('audio/unknown', 'common.svg');
  testTypes('common', 'common.svg');
});
