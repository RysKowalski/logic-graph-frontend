import { Handle, NodeProps, Position } from "@xyflow/react";

export default function IFNode(props: NodeProps) {
  const topHandleStyle = { left: "0%" }
  const rightHandleStyle = { top: "0%" }
  const leftHandleStyle = { top: "100%" }
  return (
    <div className="IF-node-wrapper">
      <div className="IF-node">
        <label htmlFor="text">F</label>
        <input id="expression" name="expression" />
        <label htmlFor="text">T</label>
      </div>
      <Handle type="target" position={Position.Top} style={topHandleStyle} id="input" />
      <Handle type="source" position={Position.Right} style={rightHandleStyle} id="False" />
      <Handle type="source" position={Position.Left} style={leftHandleStyle} id="True" />
    </div>
  )
}
