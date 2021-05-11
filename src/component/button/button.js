import './button.scss';
class Button {
  // constructor(){
  //   this.buttonCssClass = 'my-button'
  // }
  buttonCssClass = 'my-button'
  render() {
    const body = document.querySelector('body');
    const breakLine = document.createElement('br');
    const button = document.createElement('button');

    button.innerHTML = 'Help';
    button.classList.add(this.buttonCssClass);
    button.addEventListener('click', ()=>{
      const paragraph = document.createElement('p');
      paragraph.innerHTML = "Hello I am printed";
      paragraph.classList.add('my-paragraph')
      body.appendChild(paragraph);
    });

    body.appendChild(breakLine);
    body.appendChild(button);
  }
}

export default Button;