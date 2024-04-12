class StoveController {
  _inputColor;
  _inputBrand;
  _inputHeightDimension;
  _inputWidthDimension;
  _inputLengthDimension;
  _inputOvenGlassDoorHeight;
  _inputOvenGlassDoorWidth;

  _stovelist = [];
  _stoveView;

  constructor() {
    this._inputColor = document.querySelector('#brand');
    this._inputBrand = document.querySelector('#color');
    this._inputHeightDimension = document.querySelector('#height');
    this._inputWidthDimension = document.querySelector('#width');
    this._inputLengthDimension = document.querySelector('#length');
    this._inputOvenGlassDoorHeight = document.querySelector('#oven-glass-door-height');
    this._inputOvenGlassDoorWidth = document.querySelector('#oven-glass-door-width');

    this._stoveView = new StoveView(document.querySelector("#stove-list"));
  }

  add() {
    const stove = new Stove(
      this._inputColor.value,
      this._inputBrand.value,
      this._inputHeightDimension.value,
      this._inputWidthDimension.value,
      this._inputLengthDimension.value,
      this._inputOvenGlassDoorHeight.value,
      this._inputOvenGlassDoorWidth.value
    );

    this._stovelist.push(stove);

    this._stoveView.update(this._stovelist);
  }
}