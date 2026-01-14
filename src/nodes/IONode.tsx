import { useState } from "react"
import { NodeProps, Position } from "@xyflow/react";
import AutoResizableInput from "../AutoResizableInput";
import HandleConnLimit from "./HandleConnLimit";


export default function IONode(props: NodeProps) {
  const [operation, setOperation] = useState<"load" | "write">("load")

  function OperationContent(operation: "load" | "write") {
    if (operation === "load") {
      return (
        <div>
          <select name="loadType" id="loadType">
            <option value="number">Number</option>
            <option value="text">Text</option>
          </select>
        </div>
      )
    } else if (operation === "write") {
      return (
        <select name="writeType" id="writeType">
          <option value="variable">Variable</option>
          <option value="Text">Text</option>
        </select>

      )
    }
  }

  function ChangeOperationContent(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as "load" | "write"
    setOperation(value)
  }

  return (
    <div>
      <div className="IO-node">
        <select name="operation" id="operation" onChange={ChangeOperationContent}>
          <option value="load">Load</option>
          <option value="write">Write</option>
        </select>

        <div id="operationContent">
          {OperationContent(operation)}
        </div>

        <AutoResizableInput id="textData" placeholder="var/text" minLength={100} visualizeSpaces={true} />

        <HandleConnLimit type="target" position={Position.Top} />
        <HandleConnLimit type="source" position={Position.Bottom} />
      </div>
    </div>
  )
}
