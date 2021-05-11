import './heading.scss'
class Heading{
  render(pageName){
    const h1 = document.createElement('h1');
    h1.innerHTML = "Webpack Tutorials. This is a " + pageName + "page";
    const body= document.querySelector('body')
    body.appendChild(h1);
  }
}

export default Heading;