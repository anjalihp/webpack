import kiwi from './image.jpg';
import './kiwi-image.scss';

export default class KiwiImage{
  render(){
    const img = document.createElement('img');
    img.src= kiwi;
    img.alt='Kiwi';
    img.classList.add('kiwi-image');

    const body = document.querySelector('body');
    body.appendChild(img)
  }
}