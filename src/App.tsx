/* eslint-disable */
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {  Select } from '@material-ui/core';
import CustomEditField from './CustomEditField'
import { columnDefs } from './columns'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
    const makeArray = ["Toyota", "Ford", "Porsche", 'Trek']
    const modelOptions = {
        'Toyota': ["Rav4"],
        'Ford': ["Mustang"],
        'Porsche': ["911 Turbo"],
        'Trek': ["RSL Emonda H1"],
    }



    const [rowData, setRowData] = React.useState([
        { make: '', model: '', price: 42000, id: 1 },
        { make: '', model: '', price: 1000, id: 2 },
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

    const getOptions = useDynamicCallback((params: any) => {
        const test = params?.node.data
        const test2 = params.context.model[test.make] ? params.context.model[test.make] : []
        return test2;
    })

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                frameworkComponents={frameworkComponents}
                getRowNodeId={data => data.id}
                // all options and update methods pass through context
                // update... methods need to be instantiatied as useDynamicCallback instances
                context={ { make: makeArray, model: modelOptions, updateOptions: getOptions } }
                singleClickEdit
            >
            </AgGridReact>
        </div>
    );
};

export default App;