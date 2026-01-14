import { Node, NodeProps, Position } from "@xyflow/react";
import AutoResizableInput from "../AutoResizableInput";
import HandleConnLimit from "./HandleConnLimit";

export default function OperationNode(props: NodeProps) {
  return (
    <div className="operation-node">
      <AutoResizableInput placeholder="i++" minLength={100} />
      <HandleConnLimit type="target" position={Position.Top} />
      <HandleConnLimit type="source" position={Position.Bottom} />
    </div>
  )
}

