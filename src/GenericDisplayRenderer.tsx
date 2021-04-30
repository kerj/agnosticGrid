import React from 'react'
import { Typography } from '@material-ui/core';

interface GenericDisplayRendererProps {
  displayValue: string;
}

export const GenericDisplayRenderer = ({ displayValue }: GenericDisplayRendererProps) => {

  return (
    <Typography>
      { displayValue }
    </Typography>
  )
}
