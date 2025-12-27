import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import AutoResizableInput from "../AutoResizableInput";

export default function OperationNode(props: NodeProps) {
  return (
    <div className="operation-node">
      <AutoResizableInput />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

