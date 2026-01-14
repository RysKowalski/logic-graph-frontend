import { NodeProps, Position } from "@xyflow/react";
import HandleConnLimit from "./HandleConnLimit"

export default function IFNode(props: NodeProps) {
  const topHandleStyle = { left: "0%" }
  const rightHandleStyle = { top: "0%" }
  const leftHandleStyle = { top: "100%" }
  return (
    <div className="IF-node-wrapper">
      <div className="IF-node">
        <label htmlFor="text">F</label>
        <input id="expression" name="expression" placeholder="0 = 0" />
        <label htmlFor="text">T</label>
      </div>
      <HandleConnLimit type="target" position={Position.Top} style={topHandleStyle} id="input" />
      <HandleConnLimit type="source" position={Position.Right} style={rightHandleStyle} id="False" />
      <HandleConnLimit type="source" position={Position.Left} style={leftHandleStyle} id="True" />
    </div>
  )
}
