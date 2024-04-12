class StoveView {
  _container;

  constructor(container) {
    this._container = container;
  }

  update(stoveList) {
    this._container.innerHTML = this._template(stoveList);
  }

  _template(stoveList) {
    return `
      <h1>Listagem</h1>
      
      <table>
        <thead>
          <th>Marca</th>
          <th>Cor</th>
          <th>Altura</th>
          <th>Largura</th>
          <th>Comprimento</th>
          <th>Forno</th>
        </thead>

        <tbody>
          ${stoveList.map((stove) => {
            return `
              <tr>
                <td>${stove.brand}</td>
                <td>${stove.color}</td>
                <td>${stove.heightDimension}</td>
                <td>${stove.widthDimension}</td>
                <td>${stove.lengthDimension}</td>
                <td>
                  <table>
                    <thead>
                      <th>Altura</th>
                      <th>Largura</th>
                    </thead>

                    <tbody>
                      <tr>
                        <td>${stove.oven.glassDoorHeight}</td>
                        <td>${stove.oven.glassDoorWidth}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            `;
          }).join('')}          
        </tbody>
      </table>
    `;
  }
}