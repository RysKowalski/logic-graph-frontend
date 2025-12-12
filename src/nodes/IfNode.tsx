import { Handle, NodeProps, Position } from "@xyflow/react";

export default function IFNode(props: NodeProps) {
  const topHandleStyle = { left: "0%" }
  const rightHandleStyle = { top: "0%" }
  const leftHandleStyle = { top: "100%" }
  return (
    <div className="IF-node-wrapper">
      <div className="IF-node">
        <label htmlFor="tekst">Test IO</label>
      </div>
      <div style={topHandleStyle}>
        <Handle type="source" position={Position.Top} style={topHandleStyle} />
      </div>
      <div style={rightHandleStyle}>
        <Handle type="target" position={Position.Right} style={rightHandleStyle} />
      </div>
      <Handle type="target" position={Position.Left} style={leftHandleStyle} />
    </div>
  )
}
