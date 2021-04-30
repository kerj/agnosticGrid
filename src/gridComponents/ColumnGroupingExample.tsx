import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Link } from '@material-ui/core';
import { GenericDisplayRenderer } from '../GenericDisplayRenderer';
import { columnGrouping } from '../columns';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Column } from 'ag-grid-community';


export const ColumnGroupingExample = () => {
  const [gridApi, setGridApi] = React.useState(null);
  const [colApi, setColApi] = React.useState(null);
  const [selectedColIds, setSelectedColIds] = React.useState('');

  const [rowData, setRowData] = React.useState([
    { make: 'Ford', model: 'Mustang', price: 42000, type: 'Car', power: 'gas', id: 1 },
    { make: 'Trek', model: 'Farley', price: 1000, type: 'Bike', power: 'People', id: 2  },
    { make: 'Chevy', model: 'Tahoe', price: 42000, type: 'Car', power: 'gas', id: 3  },
    { make: 'Kona', model: 'Coiler', price: 1000, type: 'Bike', power: 'People', id: 4  },
    { make: 'Jaguar', model: 'X1', price: 42000, type: 'Car', power: 'gas', id: 5  },
    { make: 'Marin', model: 'Bobcat Trail 7.1', price: 1000, type: 'Bike', power: 'People', id: 6  },
  ]);

  React.useEffect(() => {
    console.log('changed ', selectedColIds);
    if (gridUtils) {
      const selection = gridUtils.getSelectedNodes();
      console.log(selection);
    }
  },[selectedColIds])

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

  // all methods that require grid api should be set in here
  interface GridUtils {
    readonly redrawRows: () => void;
    readonly getSelectedNodes: () => void;
    readonly getColumn: (arg: string) => Column;
  }
  // setGridUtils should be passed to the component that has the full grid api
  // set the methods you need as shown so the parent can control the grid
  const [gridUtils, setGridUtils] = React.useState<GridUtils | null>(null);

  const onGridReady = (params: any): void => {
    const grid = params.api;
    const colApi = params.columnApi;
    setGridApi(params.api);

    setGridUtils({
      redrawRows: (): void => grid.redrawRows(),
      getSelectedNodes: (): void => grid.getSelectedNodes(),
      getColumn: (id: string): Column => colApi.getColumn(id),
    })
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 825 }}>
      <AgGridReact
        onGridReady={onGridReady}
        rowData={rowData}
        onSelectionChanged={ (params): void => {
            // set the column Id here so we can reuse it to style the entire column
            // setSelectedColIds(params?.column?.colId);
          console.log(params)
          if (gridUtils) {
            const check = gridUtils.getSelectedNodes();
            const col = gridUtils.getColumn('model');
            console.log(check, ' and this ', col);
          }
        }
        }
        rowSelection='single'
        defaultColDef={{
          cellStyle: (params: any): any => {
            if (params.column.colId !== undefined) {
              console.log(params);
              if (params.column.colId === selectedColIds){
                return {'background-color': 'blue'}
              }
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
    </div>
  )
}
