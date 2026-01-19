import React from 'react';
import { Handle, useNodeConnections, type HandleProps } from '@xyflow/react';

type CustomHandleProps = HandleProps & {
  connectionCount?: number;
};

function HandleConnLimit(props: CustomHandleProps) {
  const {
    connectionCount = 1,
    id,
    type,
    ...rest
  } = props;

  const connections = useNodeConnections({
    handleType: type,
    handleId: id ?? undefined,
  });

  return (
    <Handle
      {...rest}
      id={id}
      type={type}
      isConnectable={connections.length < connectionCount}
    />
  );
}

export default HandleConnLimit;
