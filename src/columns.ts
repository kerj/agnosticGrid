
export const columnDefs = [
  {
    headerName: 'Make',
    field: 'make',
    cellRenderer: 'select',
  },
  {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'autoComplete',

  },
  {
    headerName: 'Price',
    field: 'price',
    editable: false,
  },
]
