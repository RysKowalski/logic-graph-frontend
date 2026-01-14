import { Handle, NodeProps, Position } from "@xyflow/react";
import HandleConnLimit from "./HandleConnLimit";

export default function JoinNode(props: NodeProps) {
  return (
    <div>
      <Handle type="target" position={Position.Top} />
      <HandleConnLimit type="source" position={Position.Bottom} />
      <div className="join-node" />
    </div>
  )
}
