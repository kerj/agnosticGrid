/* eslint-disable */
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Link, Select } from '@material-ui/core';
import CustomEditField from './CustomEditField'
import { columnDefs } from './columns'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
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

    const useDynamicCallback = (callback: any) => {
        const ref = React.useRef(() => {});
        ref.current = callback;
        return React.useCallback((...args: any) => ref.current.apply(this, args), [])
    } 


    React.useEffect(() => {
        console.log(rowData);
    }, [rowData, setRowData])

    const frameworkComponents = {
        select: CustomEditField,
        autoComplete: CustomEditField,
        base: Select,
    };

    // props from the cell is params
    const getOptions = useDynamicCallback((params: any) => {
        const data = params?.node.data
        const optionsFromContext = params.context.model[data.make] ? params.context.model[data.make] : []
        return optionsFromContext;
    })
    //typescript complains about gridApi being possibly null? 
    const handleAddRow = async (addIndex: any) => {
        const test: any =  gridApi
       const newBlankRow = {make: '', model: '', price: '' };
        // maintains current changes in grid.. does cause a flicker 
       test.applyTransaction({
           add: [newBlankRow],
           addIndex: addIndex,
       })
    }

    const handleSaveAll = async () => {
        const test: any = gridApi
        let rowDataRaw: any[] = []
        test.forEachNode((node: any) => {
            rowDataRaw.push(node.data);
        })
        // prints all current rowData in grid to console
        console.log(rowDataRaw);
    }

    const onGridReady = (params: any) => {
        setGridApi(params.api);
    }

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                columnDefs={columnDefs}
                frameworkComponents={frameworkComponents}
                getRowNodeId={data => data.id}
                // all options and update methods pass through context
                // update methods need to be instantiatied as useDynamicCallback instances
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
    );
};

export default App;