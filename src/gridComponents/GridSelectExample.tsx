import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Link, Select } from '@material-ui/core';
import CustomEditField from '../CustomEditField';
import { columnDefs } from '../columns';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const GridSelectExample = () => {
  const [gridApi, setGridApi] = React.useState(null);

const makeArray = ["Toyota", "Ford", "Porsche", 'Trek']
const modelOptions = {
    'Toyota': ["Rav4"],
    'Ford': ["Mustang", 'GT', 'F150'],
    'Porsche': ["911 Turbo"],
    'Trek': ["RSL Emonda H1"],
}

const [rowData, setRowData] = React.useState([
    { make: '', model: '', price: 42000 },
    { make: '', model: '', price: 1000 },
    { make: '', model: '', price: 42000 },
    { make: '', model: '', price: 1000 },
    { make: '', model: '', price: 42000 },
    { make: '', model: '', price: 1000 },

]);

React.useEffect(() => {
    console.log(rowData);
}, [rowData, setRowData])

const frameworkComponents = {
    select: CustomEditField,
    autoComplete: CustomEditField,
    base: Select,
};

const getOptions = (params: any) => {
    const data = params?.node.data
    const optionsFromContext = params.context.model[data.make] ? params.context.model[data.make] : []
    return optionsFromContext;
}
//typescript complains about gridApi being possibly null? 
const handleAddRow = async (addIndex: any) => {
    const test: any = gridApi
   const newBlankRow = {make: '', model: '', price: '' };
    // maintains current changes in grid.. does cause a flicker 
   test.applyTransaction({
       add: [newBlankRow],
       addIndex: addIndex,
   })
}

const handleSaveAll = (api: any): void => {
    let rowDataRaw: any[] = []
    api.forEachNode((node: any) => {
        rowDataRaw.push(node.data);
    })
    // prints all current rowData in grid to console
    console.log(rowDataRaw);
}

// all methods that require grid api should be set in here
interface GridUtils {
  readonly handleSaveAll: () =>void;
}
// setGridUtils should be passed to the component that has the full grid api
// set the methods you need as shown so the parent can control the grid
const [gridUtils, setGridUtils] = React.useState<GridUtils | null>(null);

const onGridReady = (params: any): void => {
    const grid = params.api;
    setGridApi(params.api);

    setGridUtils({
      handleSaveAll: (): void => handleSaveAll(grid),
    })
}

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          columnDefs={columnDefs}
          // to use custom components (one way)
          frameworkComponents={frameworkComponents}
          getRowNodeId={data => data.id}
          // dont use context this way, use the setGridUtils option instead
          // reactful thinking- data should flow one way 
          context={ { make: makeArray, model: modelOptions, updateOptions: getOptions } }
          singleClickEdit
          stopEditingWhenGridLosesFocus={true}
      >
      </AgGridReact>
      <Link onClick={handleAddRow}>
          Add Row +
      </Link> 
      <br />
      <Link onClick={handleSaveAll}>
          Save
      </Link> 
    </div>
  )
}
