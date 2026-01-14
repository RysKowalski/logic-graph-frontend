import { Node, NodeProps, Position } from "@xyflow/react";
import HandleConnLimit from "./HandleConnLimit";


export type ReferenceNode = Node<{ name?: string }>
export default function ReferenceNode(props: NodeProps<ReferenceNode>) {
  let position: Position
  let handleType: "source" | "target"
  if (props.type === "ReferenceNodeIn") {
    position = Position.Top
    handleType = "target"
  } else {
    position = Position.Bottom
    handleType = "source"
  }
  return (
    <div>
      <HandleConnLimit type={handleType} position={position} />
      <div className="reference-node">
        <label htmlFor="text">{props.data.name}</label>
      </div></div>
  )
}
