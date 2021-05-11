import Image from './component/kiwi-image/image.jpg'
import Text from './alt-text.txt'
function addImage(){
  const img= document.createElement('img');
  img.alt=Text;
  img.width=300;
  img.src = Image;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;