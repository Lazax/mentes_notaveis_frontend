const stoveController = new StoveController();

document.querySelector('#stove-form').addEventListener('click', (event) => {
  event.preventDefault();

  stoveController.add(event);
});