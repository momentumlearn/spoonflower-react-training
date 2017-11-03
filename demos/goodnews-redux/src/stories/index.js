import 'shoelace-css/dist/shoelace.css';

import { newsSources, newsStory } from './sampleData';

import { MemoryRouter } from 'react-router';
import NewsSources from '../components/NewsSources';
import NewsStories from '../components/NewsStories';
import NewsStory from '../components/NewsStory';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

storiesOf('NewsSources', module).add('with sources', () => (
    <div className="container">
        <NewsSources sources={newsSources} onCheckSource={action('onCheckSource')} selected={['abc-news']} />
    </div>
))

storiesOf('NewsStory', module).add('with story', () => (
    <MemoryRouter>
    <div className="container"><NewsStory story={newsStory}/></div>
    </MemoryRouter>
))

storiesOf('NewsStories', module).add('with stories', () => (
    <MemoryRouter>
    <div className="container"><NewsStories stories={[newsStory, newsStory]}/></div>
    </MemoryRouter>
))
