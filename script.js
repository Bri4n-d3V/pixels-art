const selected = document.querySelector('.selected');
const color = document.querySelectorAll('.color');
const allPixels = document.querySelectorAll('#pixel-board .pixel-row .pixel');
const clear = document.querySelector('#clear-board');

function changeClassSelected() {
  color.forEach(item => {
    item.addEventListener('click', () => {
      for (let i = 0; i < color.length; i += 1) {
        color[i].classList.remove('selected');
      }
      item.classList.add('selected');
    });
  });
} changeClassSelected()

function getSelectedColor() {
  allPixels.forEach(index => {
    index.addEventListener('click', event => {
      const pixel = event.target.style;
      pixel.backgroundColor = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue('background-color');
    });
  })
} getSelectedColor()

function clearBoard() {
  clear.addEventListener('click', () => {
    for (let i = 0; i < allPixels.length; i += 1) {
      allPixels[i].removeAttribute('style');
    }
  })
} clearBoard()
