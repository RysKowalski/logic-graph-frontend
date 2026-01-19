import { Node, NodeProps, Position, useNodeConnections } from "@xyflow/react";
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

  const topConnections = useNodeConnections({ handleType: 'target' })
  const bottomConnections = useNodeConnections({ handleType: 'source' })

  const isValid: boolean =
    topConnections.length + bottomConnections.length > 0
  return (
    <div>
      <HandleConnLimit type={handleType} position={position} />
      <div className={`reference-node ${isValid ? 'node-valid' : 'node-invalid'}`}>
        <label htmlFor="text">{props.data.name}</label>
      </div></div>
  )
}
