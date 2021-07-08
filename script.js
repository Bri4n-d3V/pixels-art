  const selected = document.querySelectorAll('.selected');
  const color = document.querySelectorAll('.color');

  color.forEach(item => {
    item.addEventListener('click', event => {
      for (let i = 0; i < color.length; i += 1) {
        color[i].classList.remove('selected');
      }
      item.classList.add('selected');
    });
  })
