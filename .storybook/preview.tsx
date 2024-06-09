import React from 'react';
import GlobalStyles from '../src/styles/global';
import { Preview } from '@storybook/react';

const preview: Preview = {
  tags: ['autodocs']
};

export default preview;

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
];
