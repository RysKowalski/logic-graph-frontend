import { NodeProps, Position, useNodeConnections } from "@xyflow/react";
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

  const topConnections = useNodeConnections({ handleType: 'target' })
  const bottomConnections = useNodeConnections({ handleType: 'source' })

  const isValid: boolean =
    topConnections.length + bottomConnections.length > 0
  return (
    <div className={`start-stop ${isValid ? 'node-valid' : 'node-invalid'}`}>
      <HandleConnLimit type={handleType} position={position} />
      <label htmlFor="text">{nodeType}</label>
    </div>
  )
}
