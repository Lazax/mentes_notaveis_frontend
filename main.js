document.querySelector('#brand').value = 'Brastemp';
document.querySelector('#color').value = 'azul';
document.querySelector('#height').value = 200;
document.querySelector('#width').value = 300;
document.querySelector('#length').value = 100;
document.querySelector('#oven-glass-door-height').value = 150;
document.querySelector('#oven-glass-door-width').value = 250;

const stoveController = new StoveController();

document.querySelector('#stove-form').addEventListener('click', (event) => {
  event.preventDefault();

  stoveController.add(event);
});