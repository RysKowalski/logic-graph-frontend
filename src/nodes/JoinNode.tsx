import { Handle, NodeProps, Position, useNodeConnections } from "@xyflow/react";
import HandleConnLimit from "./HandleConnLimit";

export default function JoinNode(props: NodeProps) {
  const topConnections = useNodeConnections({ handleType: 'target' })
  const bottomConnections = useNodeConnections({ handleType: 'source' })

  const isValid: boolean =
    topConnections.length > 0 && bottomConnections.length > 0
  return (
    <div>
      <Handle type="target" position={Position.Top} />
      <HandleConnLimit type="source" position={Position.Bottom} />
      <div className={`join-node ${isValid ? 'node-valid' : 'node-invalid'}`} />
    </div>
  )
}
