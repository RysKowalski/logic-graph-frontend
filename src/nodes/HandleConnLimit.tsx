import React from 'react';
import { Handle, useNodeConnections, type HandleProps } from '@xyflow/react';

type CustomHandleProps = HandleProps & {
  connectionCount?: number;
};

const HandleConnLimit(props: CustomHandleProps) {
  const { connectionCount = 1, ...rest } = props;

  const connections = useNodeConnections({
    handleType: rest.type,
  });

  return (
    <Handle
      {...rest}
      isConnectable={connections.length < connectionCount}
    />
  );
}

export default HandleConnLimit;
