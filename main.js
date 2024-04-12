const stoveController = new StoveController();

document.querySelector('#stove-form').addEventListener('submit', (event) => {
  event.preventDefault();

  stoveController.add(event);
});