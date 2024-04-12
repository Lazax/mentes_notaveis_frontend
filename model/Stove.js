class Stove {
  _color;
  _brand;
  _heightDimension;
  _widthDimension;
  _lengthDimension;
  _oven;
  _burners = [];

  constructor(color, brand, heightDimension, widthDimension, lengthDimension, glassDoorHeight, glassDoorWidth) {
    this._color = color;
    this._brand = brand;
    this._heightDimension = heightDimension;
    this._widthDimension = widthDimension;
    this._lengthDimension = lengthDimension;

    this._oven = new Oven(glassDoorHeight, glassDoorWidth);

    for (let counter = 0; counter < 4; counter++) {
      this._burners.push(new Burner());
    }
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get heightDimension() {
    return this._heightDimension;
  }

  get widthDimension() {
    return this._widthDimension;
  }

  get lengthDimension() {
    return this._lengthDimension;
  }

  get oven() {
    return this._oven;
  }
}