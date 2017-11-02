import {newsSources, newsStory} from "./sampleData";

import NewsSources from "../components/NewsSources";
import NewsStory from "../components/NewsStory";
import React from 'react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {storiesOf} from '@storybook/react';

storiesOf('NewsStory', module).add('with story', () => (
    <div className="container"><NewsStory story={newsStory}/></div>
))

storiesOf('NewsSources', module).add('with no sources', () => (
    <div style={{
        maxWidth: '400px'
    }}><NewsSources sources={null}/></div>
)).add('with sources', () => (
    <div style={{
        maxWidth: '400px'
    }}><NewsSources sources={newsSources}/></div>
));
