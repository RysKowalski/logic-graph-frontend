import { NodeProps, Position } from "@xyflow/react";
import HandleConnLimit from "./HandleConnLimit";

export default function StartStopNode(props: NodeProps) {
  let position: Position
  let handleType: "source" | "target"
  let nodeType: "Start" | "Stop"
  if (props.type === "StartNode") {
    position = Position.Bottom
    handleType = "source"
    nodeType = "Start"
  } else {
    position = Position.Top
    handleType = "target"
    nodeType = "Stop"
  }
  return (
    <div className="start-stop">
      <HandleConnLimit type={handleType} position={position} />
      <label htmlFor="text">{nodeType}</label>
    </div>
  )
}
