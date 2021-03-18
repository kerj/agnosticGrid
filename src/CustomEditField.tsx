git import React from 'react';
import { TextField, Select, MenuItem } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';




export default React.forwardRef((props: any, ref: any) => {
  const inputRef = React.useRef<any>();
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  const handleUpdate = (e: any) => {
    // locally set the value in state
    setValue(e.target.value);
    // set node data to new value 
    props.node.setData({ ...props.data, make: e.target.value });
    // updates the get options callback return value
    props.context.updateOptions(props)
    // without this options won't change in field
    props.api.refreshCells({force: true});
  }

  const handleAutoCompleteValue = (e: any, value: any) => {
    setValue(value)
    props.node.setData({ ...props.data, model: value });
    //updateOptions then refresh here? 
  }

  const onInputValueChange = (e: any, inputValue: any) => {
    // only for typeahead in autocomplete
    setInputValue(inputValue);
  }

  React.useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        // fetch value for dispaly
        return value;
      },
    };
  });

  return <>
    {
      // render only 'select' field this pass
      (props.colDef.cellRenderer === 'select') &&
      <Select
        onChange={(e) => handleUpdate(e)}
        value={props.data.make}
        ref={inputRef}
      >
        {
          props.context.make.map((op: string) => (
            <MenuItem value={op}>{op}</MenuItem>
          ))
        }
      </Select>
    }
    {
      (props.colDef.cellRenderer === 'autoComplete') &&
      // are their options available for this field? 
      props.context.updateOptions(props).length ? <Autocomplete
        style={{ padding: '0 10px' }}
        options={props.context.updateOptions(props)}
        value={props.data.model}
        onChange={handleAutoCompleteValue}
        inputValue={inputValue}
        onInputChange={onInputValueChange}
        disableClearable
        renderInput={(params) => (
          <TextField
            {...params}
          />
        )}
      /> : <TextField disabled />
    }
  </>
});
