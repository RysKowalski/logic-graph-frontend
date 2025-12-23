import { Handle, Node, NodeProps, Position } from "@xyflow/react";


export type ReferenceNode = Node<{ name?: string }>
export default function ReferenceNode(props: NodeProps<ReferenceNode>) {
  let position: Position
  let handleType: "source" | "target"
  if (props.type === "ReferenceNodeIn") {
    position = Position.Top
    handleType = "source"
  } else {
    position = Position.Bottom
    handleType = "target"
  }
  return (
    <div>
      <Handle type={handleType} position={position} />
      <div className="reference-node">
        <label htmlFor="text">{props.data.name}</label>
      </div></div>
  )
}
