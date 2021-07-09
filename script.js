const selected = document.querySelector('.selected');
const color = document.querySelectorAll('.color');
const allPixels = document.querySelectorAll('#pixel-board .pixel-row .pixel');
const pixelBoard = document.querySelector('#pixel-board');
const input = document.querySelector('#board-size');
const clear = document.querySelector('#clear-board');
const vqv = document.querySelector('#generate-board')

function changeClassSelected() {
  color.forEach(i => {
    i.addEventListener('click', () => {
      for (let j = 0; j < color.length; j += 1) {
        color[j].classList.remove('selected');
      }
      i.classList.add('selected');
    });
  });
}
changeClassSelected()

function getSelectedColor() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(index => {
    index.addEventListener('click', event => {
      const pixel = event.target.style;
      pixel.backgroundColor = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue('background-color');
    });
  })
}
getSelectedColor()

function clearBoard() {
  clear.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].removeAttribute('style');
    }
  })
}
clearBoard()

function buttonVqv() {
  vqv.addEventListener('click', Board);

  function Board() {
    let inputValue = input.value
    if (Number(inputValue) === 0) {
      return alert('Board inválido!')
    }
    if (Number(inputValue) < 5) {
      inputValue = 5;
    }
    if (Number(inputValue) > 50) {
      inputValue = 50;
    }
    while (pixelBoard.firstChild) {
      pixelBoard.firstChild.remove()
    }
    for (let i = 0; i < inputValue; i += 1) {
      const createdTR = document.createElement('div');
      pixelBoard.appendChild(createdTR);
      createdTR.className = 'pixel-row';
      for (let j = 0; j < inputValue; j += 1) {
        const createdTD = document.createElement('div');
        createdTR.appendChild(createdTD);
        createdTD.className = 'pixel';
      }
    }
    getSelectedColor();
  }
}
buttonVqv();
