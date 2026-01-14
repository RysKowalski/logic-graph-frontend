import { Handle, NodeProps, Position } from "@xyflow/react";

export default function JoinNode(props: NodeProps) {
  return (
    <div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <div className="join-node" />
    </div>
  )
}
