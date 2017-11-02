import 'shoelace-css/dist/shoelace.css';
import '../src/App.css';

import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
