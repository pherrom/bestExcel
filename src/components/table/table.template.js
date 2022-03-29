const CODES = {
  A: 65,
  Z: 90
}

function toCell(cell) {
  return `
  <div class="table__row-data-cell" contenteditable>
    ${cell}
  </div>
  `
}

function toColumn(col) {
  return `
  <div class="table__row-data-column">
    ${col}
  </div>
  `
}

function createRow(index, content) {
  return `
  <div class="table__row">
    <div class="table__row-info">
      ${index}
    </div>
    <div class="table__row-data">
      ${content}
    </div>
  </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 30) {
  const colsCount = CODES.Z - CODES.A + 1 
  const rows = []

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('')

  rows.push(createRow('', cols))

  for(let i = 0; i < rowsCount; i++){
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')
    rows.push(createRow(i+1, cells))
  }

  return rows.join('')
}