import { Typography } from '@material-ui/core';
import { ReactNode } from 'react';

interface GenericDisplayRendererProps {
  value: ReactNode;
  props: Record<string, any>;
}

export const GenericDisplayRenderer = (props: GenericDisplayRendererProps) => {
  return (
    <Typography>
      { props.value }
    </Typography>
  )
}
