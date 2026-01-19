import { Node, NodeProps, Position, useNodeConnections } from "@xyflow/react";
import AutoResizableInput from "../AutoResizableInput";
import HandleConnLimit from "./HandleConnLimit";

export default function OperationNode(props: NodeProps) {
  const topConnections = useNodeConnections({ handleType: 'target' })
  const bottomConnections = useNodeConnections({ handleType: 'source' })

  const isValid: boolean =
    topConnections.length > 0 && bottomConnections.length > 0
  return (
    <div className={`operation-node ${isValid ? 'node-valid' : 'node-invalid'}`}>
      <AutoResizableInput placeholder="i++" minLength={100} />
      <HandleConnLimit type="target" position={Position.Top} />
      <HandleConnLimit type="source" position={Position.Bottom} />
    </div>
  )
}

