import Heading from './component/heading/heading';
import KiwiImage from './component/kiwi-image/kiwi-image';
import _ from 'lodash';
import React from 'react';

const heading = new Heading();
heading.render(_.upperFirst('Kiwi'));

const kiwiImage = new KiwiImage();
kiwiImage.render();
kiwiImage.render();
