import { Handle, NodeProps, Position } from "@xyflow/react";

export default function IONode(props: NodeProps) {
  return (
    <div>
      <div className="IO-node">
        <label htmlFor="tekst">Test IO</label>
      </div>
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
    </div>
  )
}
