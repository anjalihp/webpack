import helloWorld from './helloworld.js';
import addImage from './add-image.js';
import Button from './component/button/button.js';
import Heading from './component/heading/heading.js'
import _ from 'lodash';

helloWorld();
addImage();
addImage();
addImage();
addImage();
addImage();

const heading = new Heading();
heading.render(_.upperFirst("Hello world-1"));
const heading2 = new Heading();
heading2.render(_.upperFirst("Hello world-2"));
const button = new Button();
button.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'DEVELOPMENT') {
  console.log('Development Mode')
}