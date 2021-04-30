import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Link } from '@material-ui/core';
import { GenericDisplayRenderer } from '../GenericDisplayRenderer';
import { columnGrouping } from '../columns';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export const ColumnGroupingExample = () => {
  const [gridApi, setGridApi] = React.useState(null);
  const [selectedColIds, setSelectedColIds] = React.useState('');

  const [rowData, setRowData] = React.useState([
    { make: 'Ford', model: 'Mustang', price: 42000, type: 'Car', power: 'gas' },
    { make: 'Trek', model: 'Farley', price: 1000, type: 'Bike', power: 'People' },
    { make: 'Chevy', model: 'Tahoe', price: 42000, type: 'Car', power: 'gas' },
    { make: 'Kona', model: 'Coiler', price: 1000, type: 'Bike', power: 'People' },
    { make: 'Jaguar', model: 'X1', price: 42000, type: 'Car', power: 'gas' },
    { make: 'Marin', model: 'Bobcat Trail 7.1', price: 1000, type: 'Bike', power: 'People' },
  ]);

  React.useEffect(() => {
    if (gridUtils !== null) {
      console.log(selectedColIds);
      gridUtils.redrawRows();
    }
  }, [selectedColIds, setSelectedColIds])

  React.useEffect(() => {
    console.log(rowData);
  }, [rowData, setRowData])

  const frameworkComponents = {
    base: GenericDisplayRenderer,
  };

  const getOptions = (params: any) => {
    const data = params?.node.data
    const optionsFromContext = params.context.model[data.make] ? params.context.model[data.make] : []
    return optionsFromContext;
  }
  //typescript complains about gridApi being possibly null? 
  const handleAddRow = async (addIndex: any) => {
    const test: any = gridApi
    const newBlankRow = { make: '', model: '', price: '' };
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
    readonly handleSaveAll: () => void;
    readonly redrawRows: () => void;
  }
  // setGridUtils should be passed to the component that has the full grid api
  // set the methods you need as shown so the parent can control the grid
  const [gridUtils, setGridUtils] = React.useState<GridUtils | null>(null);

  const onGridReady = (params: any): void => {
    const grid = params.api;
    setGridApi(params.api);

    setGridUtils({
      handleSaveAll: (): void => handleSaveAll(grid),
      redrawRows: (): void => grid.redrawRows(),
    })
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 825 }}>
      <AgGridReact
        onGridReady={onGridReady}
        rowData={rowData}
        onCellFocused={(params: any): void => {
          if (params?.column) {
            console.log('setting, ', params?.column?.colId)
            setSelectedColIds(params?.column?.colId)
          }
        }
        }
        defaultColDef={{
          cellStyle: (params: any): any => {
              console.log(params.colDef.colId, selectedColIds)
              if (params.colDef.colId === selectedColIds){
                return {'background-color': 'blue'}
              }
          },
        }}
        columnDefs={columnGrouping}
        // to use custom components (one way)
        frameworkComponents={frameworkComponents}
        getRowNodeId={data => data.id}
        // dont use context this way, use the setGridUtils option instead
        // reactful thinking- data should flow one way 
        context={{ updateOptions: getOptions }}
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
