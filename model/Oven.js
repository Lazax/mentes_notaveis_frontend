class Oven extends Lighter {
  _lamp = false;
  _lampButton = false;
  _glassDoorHeight;
  _glassDoorWidth;

  constructor(glassDoorHeight, glassDoorWidth) {
    super();
    
    this.glassDoorHeight = glassDoorHeight;
    this.glassDoorWidth = glassDoorWidth;
  }

  get glassDoorHeight() {
    return this._glassDoorHeight;
  }

  set glassDoorHeight(glassDoorHeight) {
    this._glassDoorHeight = glassDoorHeight;
  }

  get glassDoorWidth() {
    return this._glassDoorWidth;
  }

  set glassDoorWidth(glassDoorWidth) {
    this._glassDoorWidth = glassDoorWidth;
  }

  turnOnLamp() {
    this._lampButton = true;
    this._lamp = true;
  }

  turnOffLamp() {
    this._lampButton = false;
    this._lamp = false;
  }
}